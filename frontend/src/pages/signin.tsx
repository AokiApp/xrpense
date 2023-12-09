import React from "react";

import { PlasmicSignIn } from "../components/plasmic/xrpense/PlasmicSignIn";
import { useRouter } from "next/router";
import { signIn } from "@/blockchain";

function SignIn() {
  const router = useRouter();
  return (
    <PlasmicSignIn
      onLogin={async () => {
        await signIn();
        router.push("/");
      }}
    />
  );
}

export default SignIn;
