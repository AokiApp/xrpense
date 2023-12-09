// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type UserTypeValue = "anonymous" | "user";
export const UserTypeContext = React.createContext<UserTypeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useUserType() {
  return React.useContext(UserTypeContext);
}

export default UserTypeContext;
/* prettier-ignore-end */
