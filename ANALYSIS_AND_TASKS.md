# ArthikaSankhyana Base Analysis & Zero-Backend Migration Tasks

## 1) What BudgetBuddy currently uses for auth

Current app (`test-raju`) uses **Supabase Auth** as identity provider and session backend:

- `src/contexts/AuthContext.tsx`
  - Uses `supabase.auth.onAuthStateChange`
  - Uses `supabase.auth.getSession`
  - Uses `supabase.auth.signOut`
- `src/pages/auth/Login.tsx`
  - Uses `supabase.auth.signInWithPassword` (email/password)
  - Uses `lovable.auth.signInWithOAuth("google")`
- `src/pages/auth/Signup.tsx`
  - Uses `supabase.auth.signUp` (email/password)
  - Uses `lovable.auth.signInWithOAuth("google")`
- `src/integrations/lovable/index.ts`
  - Wraps `@lovable.dev/cloud-auth-js`
  - Exchanges OAuth tokens into Supabase session via `supabase.auth.setSession`
- `src/integrations/supabase/client.ts`
  - Creates Supabase client with URL + publishable key

## 2) Why this does not meet your new requirements

Your requirement: **Gmail-only sign-in, no backend server, no cloud DB, web-app-only local data, optional Google Drive backup/sync**.

Current BudgetBuddy violates this because:

- Depends on Supabase managed backend service for auth/session.
- Data tables are server-side in Supabase Postgres (`budgets`, `categories`, `transactions`, `liabilities`, etc.).
- Supabase migrations reference `auth.users` and server-side row-level-security policies.

## 3) Target architecture (new app from BudgetBuddy domain model)

- **Platform**: React (web) + TypeScript, deployed as PWA
- **Workspace**: Turborepo monorepo
- **DB**: Reactive local database (WatermelonDB with web adapter / equivalent IndexedDB-backed reactive layer)
- **Auth**: Google Sign-In (Gmail-only), no app server
- **Identity model**: Local identity profile derived from Google account (email, name, picture) only in browser/app storage
- **Backup/sync**: Encrypted backup JSON/blob to user’s Google Drive AppData folder
- **Crypto**: AES-256-GCM for backup payload; key derived locally (PBKDF2/Argon2id depending package support)
- **State/query**: Lightweight local stores/hooks over WatermelonDB
- **Networking**: Only Google OAuth and Google Drive APIs directly from web app/PWA

## 4) Functional requirement mapping

1. Create profile -> local `profiles` table/entity
2. Multiple budgets per profile -> `budgets` table with period and allocation
3. Daily transactions linked to budgets -> `transactions` table + aggregate queries
4. Borrowed liabilities with partial/full payments -> `liabilities` + `repayments` tables
5. Sync/backup to Google Drive -> encrypted upload/download
6. Restore on another device after Gmail login -> detect backup by email-linked app file and restore
7. If no backup exists -> onboarding flow for new user
8. Optional manual import -> allow user to pick backup file and decrypt/restore

## 5) Phased task list

## Phase 0 — Foundation
- [ ] Create monorepo (`apps/web`, `packages/*`) with Turbo + pnpm
- [ ] Add strict TypeScript, lint, format, test baseline
- [ ] Add environment and secrets handling strategy for OAuth client IDs

## Phase 1 — Local data layer
- [ ] Add WatermelonDB setup and schema versioning
- [ ] Implement entities: profile, budget, category, transaction, liability, repayment, sync_meta
- [ ] Add repositories/use-cases for CRUD and aggregates

## Phase 2 — Gmail-only auth (no backend)
- [ ] Integrate Google Identity Services / OAuth on web
- [ ] Restrict to Google provider only (remove email/password)
- [ ] Persist only minimal identity metadata locally

## Phase 3 — Core MVP screens
- [ ] Onboarding/Profile
- [ ] Budget list/create/detail
- [ ] Transaction add/list/filter + budget spend/remaining
- [ ] Liability create/detail + repayment add

## Phase 4 — Backup and restore
- [ ] Local encrypted export builder
- [ ] Google Drive AppData upload/download/list
- [ ] New vs existing user detection flow
- [ ] Manual backup file import flow

## Phase 5 — Quality and release readiness
- [ ] Unit tests for key domain logic
- [ ] E2E sanity flow for onboarding->add data->backup->restore
- [ ] Performance pass and offline reliability checks
- [ ] App icons, manifest, PWA release config

## 6) Started implementation in this folder

A new workspace scaffold is being added under `mobile-mvp` as Step 1 toward the target web-first architecture.

