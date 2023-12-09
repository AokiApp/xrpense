import React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/xrpense/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__Screen";
import { UserTypeContext } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__UserType";
import { PlasmicCreateDetail } from "../../components/plasmic/xrpense/PlasmicCreateDetail";
import { useRouter } from "next/router";

function CreateDetail() {
  return <PlasmicCreateDetail />;
}

export default CreateDetail;
