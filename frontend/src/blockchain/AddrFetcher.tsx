import { ReactNode, useEffect, useState } from "react";
import { web3auth } from ".";
import { ADAPTER_EVENTS } from "@web3auth/base";
import { UserTypeContext } from "../components/plasmic/xrpense/PlasmicGlobalVariant__UserType";

export function AddrFetcher({ children }: { children: ReactNode }) {
  const [_, setAddr] = useState<string | null>(null);
  useEffect(() => {
    window.currentAddr = null;
    setAddr(null);
    const conn = async () => {
      if (!web3auth.connected) {
        window.currentAddr = null;
        setAddr(null);
        console.log("DISCONNECTED");
        return;
      }
      const result = (await web3auth.provider!.request({
        method: "xrpl_getAccounts",
      })) as string[];
      window.currentAddr = result[0];
      setAddr(result[0]);
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
  return (
    <UserTypeContext.Provider value={web3auth.connected ? "user" : "anonymous"}>
      {children}
    </UserTypeContext.Provider>
  );
}
