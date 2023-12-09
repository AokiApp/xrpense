import React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/xrpense/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__Screen";
import { UserTypeContext } from "../../components/plasmic/xrpense/PlasmicGlobalVariant__UserType";
import { PlasmicCustomerEdit } from "../../components/plasmic/xrpense/PlasmicCustomerEdit";
import { useRouter } from "next/router";

function CustomerEdit() {
  return <PlasmicCustomerEdit />;
}

export default CustomerEdit;
