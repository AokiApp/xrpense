import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {
  XrplPrivateKeyProvider,
  getXRPLChainConfig,
} from "@web3auth/xrpl-provider";

const chainConfig = {
  ...getXRPLChainConfig("testnet"),
  wsTarget: "wss://testnet.xrpl-labs.com/",
  rpcTarget: "https://testnet.xrpl-labs.com/",
};
console.log("chainConfig", chainConfig);
export const web3auth = new Web3AuthNoModal({
  chainConfig,
  clientId:
    "BOyXHg9WYpxLJEzFcvTctGwM_Bof6WItmq31Mf8A4WFutBFv-urrckEGXx2lEZ0DN0511F13_QhKYgTgwY2mBQI", // get from https://dashboard.web3auth.io
  web3AuthNetwork: "sapphire_devnet",
});
const xrplProvider = new XrplPrivateKeyProvider({
  config: {
    chainConfig,
  },
});

const adapter = new OpenloginAdapter({
  privateKeyProvider: xrplProvider,
  adapterSettings: {
    uxMode: "popup",
    loginConfig: {
      jwt: {
        verifier: "xrpense-auth0",
        typeOfLogin: "jwt",
        name: "企業アカウントでシングルサインオン",
        description: "Auth0経由で企業アカウントでログイン",
        clientId: "a3ljjOhdkgUdG4xSMQ4rlFJsqAfVy7jg",
      },
    },
  },
});
web3auth.configureAdapter(adapter);

web3auth.init();
export async function signIn() {
  if (web3auth.connected) {
    return web3auth.provider;
  }
  const provider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
    loginProvider: "jwt",
    extraLoginOptions: {
      domain: "https://dev-lvysvbffb7t6gp8w.us.auth0.com",
    },
  });
  if (!provider) {
    alert("provider is undefined");
  }
  return provider;
}

declare global {
  interface Window {
    currentAddr: string | null;
  }
}
