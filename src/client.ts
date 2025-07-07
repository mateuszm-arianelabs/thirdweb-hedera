import { createThirdwebClient } from "thirdweb";
import { SmartWalletOptions } from "thirdweb/wallets";
import { hederaTestnet } from "./hedera-testnet";

const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: clientId,
});

export const accountAbstraction: SmartWalletOptions = {
  chain: hederaTestnet,
  sponsorGas: true,
};