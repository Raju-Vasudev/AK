import { useEffect, useMemo, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import type {
  AppState,
  UserProfile
} from '@arthikasankhyana/domain';
import type { GoogleIdTokenPayload } from './auth/types';

const STORAGE_KEY = 'arthikasankhyana.local.state.v1';

function createId(prefix: string): string {
  return `${prefix}_${crypto.randomUUID()}`;
}

function readState(): AppState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      profile: null,
      budgets: [],
      transactions: [],
      liabilities: [],
      repayments: []
    };
  }

  try {
    return JSON.parse(raw) as AppState;
  } catch {
    return {
      profile: null,
      budgets: [],
      transactions: [],
      liabilities: [],
      repayments: []
    };
  }
}

interface AppProps {
  googleAuthEnabled: boolean;
}

export default function App({ googleAuthEnabled }: AppProps) {
  const [state, setState] = useState<AppState>(() => readState());
  const [authMessage, setAuthMessage] = useState(
    googleAuthEnabled
      ? 'Sign in with Gmail to start local-first tracking.'
      : 'Google OAuth is not configured. Add VITE_GOOGLE_CLIENT_ID in apps/web/.env and restart dev server.'
  );

  const [profileName, setProfileName] = useState('');
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totals = useMemo(() => {
    const totalAllocated = state.budgets.reduce((sum, budget) => sum + budget.allocatedAmount, 0);
    const totalSpent = state.budgets.reduce((sum, budget) => sum + budget.spentAmount, 0);
    return {
      totalAllocated,
      totalSpent,
      totalRemaining: Math.max(0, totalAllocated - totalSpent)
    };
  }, [state.budgets]);

  const onGoogleCredential = (credentialResponse: { credential?: string }) => {
    if (!credentialResponse.credential) {
      setAuthMessage('Gmail sign-in failed. Missing credential token.');
      return;
    }

    const decoded = jwtDecode<GoogleIdTokenPayload>(credentialResponse.credential);
    if (!decoded.email || !decoded.email_verified) {
      setAuthMessage('Only verified Gmail identities are accepted.');
      return;
    }

    const now = new Date().toISOString();
    const profile: UserProfile = {
      id: createId('profile'),
      email: decoded.email,
      fullName: decoded.name ?? decoded.email,
      ...(decoded.picture ? { avatarUrl: decoded.picture } : {}),
      currency: 'INR',
      createdAt: now,
      updatedAt: now
    };

    setState((prev) => ({ ...prev, profile }));
    setProfileName(profile.fullName);
    setAuthMessage('Signed in with Gmail. Data remains local in this browser.');
  };
  const handleSignOut = () => {
    setState({
      profile: null,
      budgets: [],
      transactions: [],
      liabilities: [],
      repayments: []
    });
    localStorage.removeItem(STORAGE_KEY);
    setAuthMessage('Signed out. Sign in again to continue.');
    setProfileName('');
  };

  return (
    <div className="page">
      <aside className="ds-sidebar">
        <div className="ds-brand">
          <div className="ds-brand-mark">A</div>
          <div className="ds-brand-name">ArthikaSankhyana</div>
        </div>
        <div>
          <div className="ds-nav-title">System</div>
          <a className="ds-nav-link ds-nav-link-active" href="#" aria-current="page">
            Identity
          </a>
          <a className="ds-nav-link" href="#">
            Foundation
          </a>
          <a className="ds-nav-link" href="#">
            Layout
          </a>
        </div>
      </aside>

      <main className="ds-main">
        <header className="header">
          <div className="ds-badge">Design Language</div>
          <h1>ArthikaSankhyana Local PWA</h1>
          <p>{authMessage}</p>

          {!state.profile ? (
            <div className="ds-auth-row">
              {googleAuthEnabled ? (
                <GoogleLogin onSuccess={onGoogleCredential} onError={() => setAuthMessage('Google sign-in failed.')} />
              ) : (
                <p>Set up apps/web/.env from .env.example and restart to enable Gmail sign-in.</p>
              )}
              <p className="ds-meta">Not signed in. All features hidden until you sign in.</p>
            </div>
          ) : (
            <div className="ds-auth-row">
              <p>Signed in as {state.profile.email}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </header>

        {state.profile && (
          <section className="card-grid">
            <article className="card">
              <h2>Welcome, {state.profile.fullName}!</h2>
              <p>Your budget and transaction features will be implemented in the next phase.</p>
              <p className="ds-meta">Profile data is stored locally in this browser only.</p>
            </article>
            <article className="card">
              <h2>Snapshot</h2>
              <p>Total allocated: ₹{totals.totalAllocated.toLocaleString('en-IN')}</p>
              <p>Total spent: ₹{totals.totalSpent.toLocaleString('en-IN')}</p>
              <p>Remaining: ₹{totals.totalRemaining.toLocaleString('en-IN')}</p>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

