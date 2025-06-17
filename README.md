# ThirdWeb usage with Hedera
Sample test application demonstrating the use of Thirdweb with Hedera. A brief summary report can be found in the `SUMMARY.md` file.
You can also see the simple contracts invoked in the code inside the /contracts folder.

## Run Locally
1. Clone repository `git clone https://github.com/mateuszm-arianelabs/thirdweb-hedera`.
2. Install dependencies `yarn`.
3. Create `.env` file from template `.env.example`
4. Go to https://thirdweb.com/team/, create team and get CLIENT_ID
5. Paste CLIENT_ID into `VITE_TEMPLATE_CLIENT_ID` in `.env` file
6. Run app `yarn dev`

## Usage
1. Log to app using third web button.
2. Send Example Transaction.
3. Optional, check transaction on hashscan.