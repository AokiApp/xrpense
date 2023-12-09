import React from "react";

import { PlasmicSignIn } from "../components/plasmic/xrpense/PlasmicSignIn";
import { useRouter } from "next/router";
import { signIn } from "@/blockchain";

function SignIn() {
  return <PlasmicSignIn onLogin={signIn} />;
}

export default SignIn;
