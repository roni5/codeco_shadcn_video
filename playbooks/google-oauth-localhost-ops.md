# Google OAuth Localhost-Only Test App — Step-by-Step Ops Runbook
You have 17 projects remaining in your quota. Request an increase or delete projects. Learn more    Bornhappy5@gmail.com
> Use this runbook each time you need to rapidly create a new Google OAuth Client for a local/dev-only app (never going to prod). This is optimized for fast iterative work, minimal scopes, and avoiding Google test limits.
https://www.youtube.com/watch?v=v8j2lvjCAZc&t=18s
---

## Prerequisites
- You have a (throwaway or alternate) Google account to distribute load if you reach Google’s OAuth client limits.
- You will only use `http://localhost:3000` for testing.

---

## Step-by-Step: Create a Google OAuth Client for Localhost Testing

### 1. **Go To Google Cloud Console**
- Navigate to https://console.cloud.google.com/apis/credentials (sign in).

### 2. **Create a New Project (Optional, Good for "balancing" if hitting limits)**
- Top bar → Project dropdown → “New Project”.
- Name it (e.g. `nextjs-localhost-test-N`).
- [Optional] If near quota, use a different Google account.

### 3. **Go to Credentials → + Create Credentials → OAuth client ID**
- If prompted, configure "OAuth Consent Screen" (choose "External", no need for logo/publishing for localhost test).
    - App Name: Anything
    - User Support Email: Your own
    - Developer Contact: Your own
    - Logo: Skip
    - Scopes: Add only the basics (profile, email)
    - Test Users: Add your personal Google email if required
- Save and back to "Credentials" screen.
- Choose “Web application”.
- Set Name (e.g. `local-dev-client-{{timestamp}}`).
- **Authorized redirect URIs:**
    - `http://localhost:3000/api/auth/callback/google`
    (Repeat for any localhost variants you use, i.e. port changes.)
- Click “Create”.

### 4. **Grab Client ID and Secret**
- Copy (and store in local password manager/secure note).
- Paste into your project `.env.local` file:
    ```env
    AUTH_GOOGLE_ID=YOUR_CLIENT_ID
    AUTH_GOOGLE_SECRET=YOUR_CLIENT_SECRET
    ```

### 5. **Restart Your Next.js App**
- It must be restarted to pick up any new env vars.

### 6. **Test Login**
- Go to `http://localhost:3000` in Incognito browser (no extensions!)
- Try logging in with your Google account.
- (**No need to set logo or HTTPS. No verification needed for localhost/test.**)

> **Notes:**
> - You can have up to 100 OAuth clients per project, but Google may throttle if 1 account sets up excessive test clients. If you hit quota, use another Google account/project.
> - Never mix prod and test in Google OAuth projects for MVP plumbing.
> - For each *test app*, just create a new client as above. Simple and robust.
> - Always use `http://localhost:3000/api/auth/callback/google` as redirect URI for local dev. Match port if changed.

---

## Troubleshooting
- **If you get a 404 on Google login:**  Double check your redirect URIs, client ID/secret, and Google project/account.
- **Test user limit:**  For unpublished apps you may need to add the Gmail account you’ll log in with under “Test Users” on the consent screen.
- **If you hit quota:**  Use a different Google account for more test apps.
- **Never publish the consent screen for test/dev!**

---
The official, required Authorized redirect URI for the Google Provider when using NextAuth v5 (now generally referred to as Auth.js) in a local development environment (port 3000) is:$$\text{http://localhost:3000/api/auth/callback/google}$$Action Plan for Google Cloud ConsoleFieldWhat to PutNoteApplication typeWeb applicationStandard for Next.js applications.NameNextAuth v5 Local Dev (or your preferred name)This is for your reference only.Authorised JavaScript originsClick + ADD URI and enter: http://localhost:3000This is the base domain your app is running on.Authorised redirect URIsClick + ADD URI and enter: http://localhost:3000/api/auth/callback/googleThis is the critical, 100% correct URL for NextAuth v5's Google Provider.Why this path is correct for NextAuth v5:The path structure used by NextAuth is:$$\text{<BASE\_URL>/api/auth/callback/<PROVIDER\_ID>}$$

## Checklist for Each New Test App
- [ ] Create/Select Google Cloud Project (use a new one if needed)
- [ ] Create new OAuth client ID (Web app)
- [ ] Set redirect URI to your local dev callback
- [ ] Copy credentials to `.env.local`
- [ ] Restart dev server
- [ ] Login & verify

OAuth App and Project Limits
OAuth Client ID Limit: You are limited to 36 OAuth Client IDs per project when creating them in the Google Cloud Console. This limit is 500 if you use the gcloud CLI.

Project Limit: Your account has a quota for the total number of projects you can create. If you have fewer than 30 projects remaining in your quota, the "New Project" page will show you how many are left. You can request a project quota increase from Google.

Procedure for Client Testing
The standard, idempotent procedure for testing apps for different clients is to use Google's "Testing" mode, which is set on the OAuth consent screen. Google's policy requires separate projects for testing and production.

Your repeatable (idempotent) procedure for each client should be:

Create a new, separate Google Cloud Project for that specific client.

Navigate to "APIs & Services" > "OAuth consent screen".

Set the "User Type" to External.

Set the "Publishing status" to "Testing".

On the same page, go to the "Test users" section.

Click "+ Add Users" and add the email addresses for your client and their test accounts.

An app in "Testing" mode can have up to 100 authorized test users.

Only these specific Google accounts will be able to log in. The app does not need to be submitted for verification.

Navigate to "APIs & Services" > "Credentials" (the page you linked).

Create the "OAuth 2.0 Client ID" for the client's web application.

This client ID will now operate in "testing" mode, restricted to the 100 users you specified, providing an isolated test environment for each client.

#EOF
