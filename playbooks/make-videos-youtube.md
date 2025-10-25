Based on my research, a fully automated, 100% gcloud CLI procedure for this is not possible.

The critical steps—configuring the OAuth consent screen, setting the status to "Testing," and adding test users—are only available through the Google Cloud Console UI.

Here is the correct idempotent, step-by-step procedure that combines the CLI for automation with the required manual steps.

Hybrid Procedure: CLI + Manual Steps
This procedure is idempotent because the CLI command will simply report "already exists" if run again, and the manual steps can be verified at a glance.

Part 1: (Automated) Create the Project via gcloud CLI
This script creates a new, isolated project for your client.

Set your environment variables.

Bash

# A unique ID for the new project (all lowercase, numbers, hyphens)
export CLIENT_PROJECT_ID="client-name-auth-test-001"

# The display name for the project
export CLIENT_PROJECT_NAME="Client Name (Auth Test)"

# The ID of your billing account. 
# Find this by running: gcloud beta billing accounts list
export BILLING_ACCOUNT="012345-67890A-BCDEF0"
Run the gcloud commands.

Bash

# 1. Create the new project
gcloud projects create ${CLIENT_PROJECT_ID} --name="${CLIENT_PROJECT_NAME}"

# 2. Link the project to your billing account
gcloud beta billing projects link ${CLIENT_PROJECT_ID} --billing-account=${BILLING_ACCOUNT}

# 3. Set your gcloud config to use this new project
gcloud config set project ${CLIENT_PROJECT_ID}

# 4. Enable the APIs required for authentication
gcloud services enable iamcredentials.googleapis.com
gcloud services enable identitytoolkit.googleapis.com

echo "Project ${CLIENT_PROJECT_ID} created. Now, follow the manual UI steps."
Part 2: (Manual) Configure Consent Screen & Create Credentials
You must perform these steps in the web console.

Go to the OAuth Consent Screen: Use this URL to go directly to the correct page for the project you just created: https://console.cloud.google.com/apis/credentials/consent?project=[YOUR_PROJECT_ID] (Replace [YOUR_PROJECT_ID] with the CLIENT_PROJECT_ID you set, e.g., client-name-auth-test-001)

Set User Type:

Choose "External".

Click "Create".

Edit App Registration:

App name: Enter the client's app name (e.g., "Client's App").

User support email: Enter your developer email.

Developer contact information: Enter your email again.

Click "Save and Continue".

Scopes:

You can skip this for now. Click "Save and Continue".

Set to "Testing" and Add Test Users:

This is the most critical step. By default, the app is in "Testing" mode.

Click "+ Add Users".

Enter the Google email addresses for your client, your own test accounts, and any other developer accounts (up to 100).

Click "Add".

Click "Save and Continue".

Go to Credentials:

In the left-hand menu, click "Credentials".

Create the OAuth Client ID:

At the top, click "+ Create Credentials".

Select "OAuth client ID".

Application type: Select "Web application".

Name: Give it a clear name (e.g., "Web Client for Auth Test").

Authorized redirect URIs: Add your test URIs (e.g., http://localhost:3000/auth/callback, https://client-staging-url.com/auth/callback).

Click "Create".

Get Your Credentials:

A pop-up will appear showing your "Client ID" and "Client Secret". Use these in your application's configuration.

Your test app is now ready and locked down to only the test users you specified.

How to Create Google OAuth Credentials

This video shows the manual UI process (Part 2) for creating the OAuth Client ID and getting your credentials.

How to create Google OAuth Credentials (Client ID and Secret) - YouTube
Coding with Kazim · 11K views