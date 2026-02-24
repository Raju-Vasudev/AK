import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import './styles.css';

registerSW({ immediate: true });

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '';
const hasGoogleClientId = googleClientId.trim().length > 0;

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {hasGoogleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>
        <App googleAuthEnabled />
      </GoogleOAuthProvider>
    ) : (
      <App googleAuthEnabled={false} />
    )}
  </React.StrictMode>
);
