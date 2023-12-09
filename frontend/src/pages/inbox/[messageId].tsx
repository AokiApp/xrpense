import React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/xrpense/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__Screen";
import { UserTypeContext } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__UserType";
import { PlasmicInboxDetail } from "../../components/plasmic/xrpense/PlasmicInboxDetail";
import { useRouter } from "next/router";

function InboxDetail() {
  return <PlasmicInboxDetail />;
}

export default InboxDetail;
