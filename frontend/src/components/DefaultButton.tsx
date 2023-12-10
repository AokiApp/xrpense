import * as React from "react";
import {
  PlasmicDefaultButton,
  DefaultDefaultButtonProps
} from "./plasmic/xrpense/PlasmicDefaultButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface DefaultButtonProps extends DefaultDefaultButtonProps {
  // Feel free to add any additional props that this component should receive
}
function DefaultButton_(props: DefaultButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicDefaultButton.useBehavior<DefaultButtonProps>(
    props,
    ref
  );
  return <PlasmicDefaultButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<DefaultButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<DefaultButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const DefaultButton = React.forwardRef(
  DefaultButton_
) as any as ButtonComponentType;

export default Object.assign(DefaultButton, { __plumeType: "button" });
