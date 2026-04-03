# Google Indexing API — Setup Guide

Every time you run `npm run build`, this script automatically submits all site URLs to Google for indexing. No manual GSC submissions ever.

## One-time setup

### 1. Enable the API in Google Cloud

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use an existing one)
3. Navigate to **APIs & Services → Library**
4. Search for "Indexing API" and click **Enable**

### 2. Create a Service Account

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → Service Account**
3. Name it `buzzskito-indexing` and click **Create**
4. Skip optional steps — click **Done**
5. Click the service account email to open it
6. Go to the **Keys** tab → **Add Key → Create new key → JSON**
7. Download the JSON file
8. Save it as `scripts/google-service-account.json` in this project
   - **This file is .gitignored — never commit it to version control**

### 3. Add the service account to Search Console

1. Open [Google Search Console](https://search.google.com/search-console)
2. Select the buzzskito.ca property
3. Go to **Settings → Users and permissions → Add user**
4. Enter the service account email address (ends in `@...iam.gserviceaccount.com`)
5. Set permission to **Full** and save

### 4. Install the auth library

```bash
npm install google-auth-library
```

This is a one-time install. After this, `npm run build` will automatically submit all URLs.

## How it works

- `package.json` has `"postbuild": "node scripts/index-urls.mjs"`
- After every build (local or on Vercel), the script runs
- Each URL is submitted as `URL_UPDATED` to the Indexing API
- If the key file is missing the script skips silently — dev builds are unaffected
- Rate limited to ~2 requests/sec to stay within Google's 200/day quota

## Adding new pages

When you add a new page, add its URL to the `URLS` array in `scripts/index-urls.mjs`. The script will submit it on the next build.
