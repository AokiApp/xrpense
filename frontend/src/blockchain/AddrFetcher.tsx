import { useEffect } from "react";
import { web3auth } from ".";
import { ADAPTER_EVENTS } from "@web3auth/base";

export function AddrFetcher() {
  useEffect(() => {
    window.currentAddr = null;
    const conn = async () => {
      if (!web3auth.connected) {
        window.currentAddr = null;
        console.log("DISCONNECTED");
        return;
      }
      const result = (await web3auth.provider!.request({
        method: "xrpl_getAccounts",
      })) as string[];
      window.currentAddr = result[0];
      console.log("CONNECTED", window.currentAddr);
    };
    conn();

    web3auth.on(ADAPTER_EVENTS.CONNECTED, conn);
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, conn);
    console.log("attached event handlers");

    return () => {
      web3auth.off("CONNECTED", conn);
      web3auth.off("DISCONNECTED", conn);
      console.log("detached event handlers");
    };
  }, []);
  return <></>;
}
