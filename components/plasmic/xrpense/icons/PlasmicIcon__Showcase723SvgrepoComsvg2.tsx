// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Showcase723SvgrepoComsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Showcase723SvgrepoComsvg2Icon(
  props: Showcase723SvgrepoComsvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 9h12V7H4v2zm14 3H2V4h16v8zm0-10h-7V0H9v2H0v12h6.793l-2.796 6h2.2L9 14v6h2v-6l2.803 6h2.2l-2.796-6H20V2h-2z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Showcase723SvgrepoComsvg2Icon;
/* prettier-ignore-end */
