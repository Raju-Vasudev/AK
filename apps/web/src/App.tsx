import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import type {
  AppState,
  Budget,
  Liability,
  Transaction,
  UserProfile
} from '@arthikasankhyana/domain';
import {
  calculateBudgetRemaining,
  calculateLiabilityPaid
} from '@arthikasankhyana/domain';
import type { GoogleIdTokenPayload } from './auth/types';

const STORAGE_KEY = 'arthikasankhyana.local.state.v1';

type AppFormEvent = FormEvent<HTMLFormElement>;

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
  const [budgetName, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
  const [txnBudgetId, setTxnBudgetId] = useState('');
  const [txnAmount, setTxnAmount] = useState<number>(0);
  const [txnType, setTxnType] = useState<'expense' | 'income'>('expense');
  const [liabilityName, setLiabilityName] = useState('');
  const [liabilityAmount, setLiabilityAmount] = useState<number>(0);

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
      <header className="header">
        <h1>ArthikaSankhyana Local PWA</h1>
        <p>{authMessage}</p>
        {!state.profile ? (
          <div>
            {googleAuthEnabled ? (
              <GoogleLogin onSuccess={onGoogleCredential} onError={() => setAuthMessage('Google sign-in failed.')} />
            ) : (
              <p>Set up `apps/web/.env` from `.env.example` and restart to enable Gmail sign-in.</p>
            )}
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '8px' }}>
              Not signed in. All features hidden until you sign in.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ margin: 0 }}>Signed in as {state.profile.email}</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </header>

      {state.profile && (
        <section className="card-grid">
          <article className="card">
            <h2>Welcome, {state.profile.fullName}!</h2>
            <p>Your budget and transaction features will be implemented in the next phase.</p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Profile data is stored locally in this browser only.
            </p>
          </article>
        </section>
      )}
    </div>
  );
}

