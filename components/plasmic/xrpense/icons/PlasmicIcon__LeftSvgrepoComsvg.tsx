// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftSvgrepoComsvgIcon(props: LeftSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.35 12.75l4.86 4.712-1.045 1.076L3.423 12l6.742-6.539 1.045 1.077-4.86 4.712H21v1.5H6.35z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LeftSvgrepoComsvgIcon;
/* prettier-ignore-end */
