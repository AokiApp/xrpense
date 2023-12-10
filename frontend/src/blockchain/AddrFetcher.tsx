import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { web3auth } from ".";
import { ADAPTER_EVENTS, IProvider } from "@web3auth/base";
import { UserTypeContext } from "../components/plasmic/xrpense/PlasmicGlobalVariant__UserType";

type AccountContextValue = {
  connected: boolean;
  address: string | null;
  provider: IProvider | null;
};
export const AccountContext = createContext<AccountContextValue>({
  connected: false,
  address: null,
  provider: null,
});

export function AddrFetcher({ children }: { children: ReactNode }) {
  const [addr, setAddr] = useState<string | null>(null);
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
    <AccountContext.Provider
      value={{
        connected: web3auth.connected,
        address: addr,
        provider: web3auth.provider,
      }}
    >
      <UserTypeContext.Provider
        value={web3auth.connected ? "user" : "anonymous"}
      >
        {children}
      </UserTypeContext.Provider>
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const addr = useContext(AccountContext);
  return addr;
}
