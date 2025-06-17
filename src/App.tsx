import { ConnectButton, useSendTransaction } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";
import { getContract, prepareContractCall } from "thirdweb";
import { hederaTestnet } from "./hedera-testnet";
import { useState } from "react";

const contract = getContract({
	client,
	address: "0x339DB467984E4171877953463d07A3F496ff4Bf2",
	chain: hederaTestnet
})

export function App() {
	const { mutateAsync: sendTransaction } = useSendTransaction();
	const [isLoading, setIsLoading] = useState(false);
	const [txHash, setTxHash] = useState("");

	const onClick = async () => {
		try {
			setIsLoading(true);
			const transaction = prepareContractCall({
				contract,
				method: "function incrementCounter()",
			});
			const tx = await sendTransaction(transaction);
			setTxHash(tx.transactionHash)
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				<Header />

				<div className="flex justify-center mb-20 gap-4">
					<ConnectButton
						client={client}
						appMetadata={{
							name: "Example app",
							url: "https://example.com",
						}}
					/>
					<button disabled={isLoading} className="bg-zinc-700 py-1 px-4 rounded hover:bg-zinc-600 transition-all disabled:opacity-20 disabled:cursor-progress" onClick={onClick}>Send Transaction</button>
				</div>

				{txHash && <p>TxHash: {txHash}</p>}
			</div>
		</main>
	);
}

function Header() {
	return (
		<header className="flex flex-col items-center mb-20 md:mb-20">
			<img
				src={thirdwebIcon}
				alt=""
				className="size-[150px] md:size-[150px]"
				style={{
					filter: "drop-shadow(0px 0px 24px #a726a9a8)",
				}}
			/>

			<h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-100">
				thirdweb
			</h1>
		</header>
	);
}