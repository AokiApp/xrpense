import React from "react";
import { PlasmicHistoryDetail } from "../../components/plasmic/xrpense/PlasmicHistoryDetail";
import { web3auth } from "@/blockchain";
import { CheckCreate, Payment } from "xrpl";

function HistoryDetail() {
  const [tx, setTx] = React.useState<Result | undefined>();
  const handleStart = async () => {
    try {
      const txSign = await createCheck();
      setTx(txSign);
    } catch (e: any) {
      console.log("error", e);
      alert(e.message);
    }
  };
  return <PlasmicHistoryDetail onRedeemFlowStart={handleStart} txResult={tx} />;
}

export default HistoryDetail;

type Result = {
  tx_blob: string;
  hash: string;
};

async function createCheck() {
  if (!web3auth.connected || !web3auth.provider || !window.currentAddr) {
    throw new Error("Please connect to your wallet first");
  }
  const addr = window.currentAddr;

  // Transaction to create a Check whose amount is 10000, to rAlice...
  const tx: CheckCreate = {
    TransactionType: "CheckCreate",
    Account: addr,
    Destination: "r9CnWfh2aqvoHEpdhXUTqwPp6CQtNoJyqC",
    SendMax: "1000",
    DestinationTag: 0,
    Expiration: 0,
  };
  const txSign = (await web3auth.provider.request({
    method: "xrpl_signTransaction",
    params: {
      transaction: {
        ...tx,
      },
    },
  })) as Result;

  console.log("txSign", txSign);
  return txSign;
}
