# Deployment Setup

This project automatically deploys to Scaleway Object Storage on every push to the `main` branch.

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

1. **SCALEWAY_ACCESS_KEY**
   - Your Scaleway API access key
   - Get this from: Scaleway Console → Project Settings → API keys

2. **SCALEWAY_SECRET_KEY**
   - Your Scaleway API secret key
   - Received when you create the API key

3. **SCALEWAY_REGION**
   - The region where your bucket is located
   - Example: `nl-ams` (Amsterdam), `fr-par` (Paris), `pl-waw` (Warsaw)

4. **SCALEWAY_BUCKET_NAME**
   - The name of your Object Storage bucket
   - Example: `my-website-bucket`

## How It Works

The GitHub Action workflow runs on all branches and consists of two jobs:

### Build Job (runs on all branches)
1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Runs linting (`npm run lint`)
5. Runs production build (`npm run build`)
6. Uploads build artifacts (only on main branch)

### Deploy Job (only runs on main branch)
1. Downloads the build artifacts from the build job
2. Configures AWS CLI for Scaleway
3. Syncs the `out/` directory to your Scaleway bucket
4. Sets files to public-read for web hosting

This setup allows you to verify that feature branches build successfully without deploying them.

## Bucket Configuration

For static website hosting, ensure your Scaleway bucket is configured:
- Enable "Static Website Hosting" in bucket settings
- Set index document to `index.html`
- Set error document to `404.html` (optional)

