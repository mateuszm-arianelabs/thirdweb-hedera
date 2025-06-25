# ThirdWeb usage with Hedera
A React + Vite application demonstrating the use of thirdweb technology with the Hedera blockchain.

This minimalist app allows users to log in using various methods, including Google and wallet providers like MetaMask. It also enables sending a test transaction, signed using the thirdweb SDK.

The repository includes simple smart contracts located in the /contracts folder, deployed specifically for signing transactions.
A brief summary of the implementation process can be found in the SUMMARY.md file.

## Run Locally
Required:
- Node 20+ (Tested on 20.19.1)
- Pnpm


1. Clone repository `git clone https://github.com/mateuszm-arianelabs/thirdweb-hedera`.
2. Install dependencies `pnpm install`.
3. Create `.env` file from template `.env.example`
4. Go to https://thirdweb.com/team/, create team and get CLIENT_ID
5. Paste CLIENT_ID into `VITE_TEMPLATE_CLIENT_ID` in `.env` file
6. Run app `pnpm dev`

## Usage
1. Log to app using third web button.
2. Send Example Transaction.
3. Optional, check transaction on hashscan.