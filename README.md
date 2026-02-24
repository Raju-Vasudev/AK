# ArthikaSankhyana Web-First MVP (Zero-Backend)

This workspace starts the new app as a **React + TypeScript PWA** with **Gmail-only auth**, **local-only data storage**, and no custom backend server.

## Run

```bash
pnpm install
pnpm --filter @arthikasankhyana/web dev
```

## Environment

1. Copy `apps/web/.env.example` to `apps/web/.env`
2. Set `VITE_GOOGLE_CLIENT_ID` from Google Cloud OAuth (Web client)

## Current implementation (Step 1)

- Gmail sign-in UI via Google OAuth client SDK
- Profile, budgets, transactions, liabilities local flows
- Local persistence in browser storage
- PWA setup via `vite-plugin-pwa`
- Shared domain models in `packages/domain`

## Next implementation phases

- Replace storage with WatermelonDB/LokiJS web adapter
- Add encrypted Google Drive backup/restore
- Add restore-detection flow for existing users
- Add manual backup file import
- Harden validations and tests

