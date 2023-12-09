import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {
  XrplPrivateKeyProvider,
  getXRPLChainConfig,
} from "@web3auth/xrpl-provider";
import { convertStringToHex, Payment, xrpToDrops } from "xrpl";

const chainConfig = getXRPLChainConfig("devnet");

const web3auth = new Web3AuthNoModal({
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.OTHER,
    chainId: "0x3",
    rpcTarget: "https://s.altnet.rippletest.net:51234",
  },
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
    uxMode: "redirect",
    loginConfig: {
      jwt: {
        verifier: "b2clogin",
        typeOfLogin: "jwt",
        name: "企業アカウントでシングルサインオン",
        description: "Azure AD B2C経由で企業アカウントでログイン",
        clientId: "fd3b26bf-6c50-411f-bc92-052b5693e413",
      },
    },
  },
});
web3auth.configureAdapter(adapter);

export async function signIn() {
  await web3auth.init();
  const provider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
    loginProvider: "jwt",
    extraLoginOptions: {
      domain:
        "https://xrpensehackathon.b2clogin.com/xrpensehackathon.onmicrosoft.com/oauth2/v2.0/?p=b2c_1_xrpenselogin",
      response_type: "token",
      scope:
        "openid offline_access https://xrpensehackathon.onmicrosoft.com/xrpense/email.read",
      response_mode: "fragment",
    },
  });
}
