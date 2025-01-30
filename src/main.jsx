import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';  // Correct import for BrowserTracing
import { Replay } from '@sentry/replay';  // Correct import for Replay

// Initialize Sentry
Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    new BrowserTracing(),  // Correct instance creation
    new Replay(),  // Correct instance creation
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Render the App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
