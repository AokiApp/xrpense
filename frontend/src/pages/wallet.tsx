import React from "react";
import { PlasmicWallet } from "../components/plasmic/xrpense/PlasmicWallet";
import { useAccount } from "@/blockchain/AddrFetcher";

function Wallet() {
  const acct = useAccount();
  const handleSubmit = async (tx_json: string) => {
    try {
      const tx = JSON.parse(tx_json);
      const txSend = await acct.provider!.request({
        method: "xrpl_submitTransaction",
        params: {
          transaction: {
            ...tx,
          },
        },
      });
      console.log("txSend", txSend);
    } catch (e: any) {
      console.log("error", e);
      alert(e.message);
    }
  };
  return (
    <PlasmicWallet address={useAccount().address!} onTxSubmit={handleSubmit} />
  );
}

export default Wallet;
