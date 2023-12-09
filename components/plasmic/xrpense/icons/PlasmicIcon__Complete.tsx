// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompleteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompleteIcon(props: CompleteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      data-name={"Layer 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.46 42.29a2 2 0 01-1.46-.58l-9.5-9.5a2 2 0 012.83-2.83l8.09 8.09 15.21-15.18a2 2 0 112.83 2.83L29.87 41.71a2 2 0 01-1.41.58z"
        }
        fill={"#ffb300"}
      ></path>

      <path
        d={
          "M32 60a28 28 0 1128-29.53 2 2 0 01-1.88 2.11A2 2 0 0156 30.69a24 24 0 10-16.36 24.06 23.86 23.86 0 0013.94-12.24 2 2 0 113.59 1.75 27.78 27.78 0 01-16.26 14.29A28.14 28.14 0 0132 60z"
        }
        fill={"#0074ff"}
      ></path>
    </svg>
  );
}

export default CompleteIcon;
/* prettier-ignore-end */
