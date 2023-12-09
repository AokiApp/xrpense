// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConferenceSvgrepoComsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConferenceSvgrepoComsvg2Icon(
  props: ConferenceSvgrepoComsvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 422.207 422.207"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M58.776 239.422h304.655a8 8 0 008-8V45.623a8 8 0 00-8-8H58.776a8 8 0 00-8 8v185.799a8 8 0 008 8zm8-185.799h288.655v169.799H66.776V53.623zm160.383 259.946h-32.107c-26.284 0-47.668 21.384-47.668 47.669v46.464a8 8 0 008 8h111.441a8 8 0 008-8v-46.464c0-26.285-21.383-47.669-47.666-47.669zm31.666 86.133h-95.441v-38.464c0-17.462 14.206-31.669 31.668-31.669h32.107c17.461 0 31.666 14.207 31.666 31.669v38.464zM181.338 14.505a8 8 0 018-8h43.531a8 8 0 010 16h-43.531a8 8 0 01-8-8zM0 290.485a8 8 0 018-8h28.156a8 8 0 017.984-8.507h43.531a8 8 0 017.984 8.507h85.697a8 8 0 017.984-8.507h43.531a8 8 0 017.984 8.507h85.699a8 8 0 017.984-8.507h43.531a8 8 0 017.984 8.507h28.154a8 8 0 010 16H8a8 8 0 01-8-8zm81.96 23.084H49.853c-26.284 0-47.668 21.384-47.668 47.669v46.464a8 8 0 008 8h111.442a8 8 0 008-8v-46.464c0-26.285-21.383-47.669-47.667-47.669zm31.667 86.133H18.185v-38.464c0-17.462 14.206-31.669 31.668-31.669H81.96c17.461 0 31.667 14.207 31.667 31.669v38.464zm258.729-86.133h-32.107c-26.284 0-47.668 21.384-47.668 47.669v46.464a8 8 0 008 8h111.442a8 8 0 008-8v-46.464c0-26.285-21.383-47.669-47.667-47.669zm31.667 86.133h-95.442v-38.464c0-17.462 14.206-31.669 31.668-31.669h32.107c17.461 0 31.667 14.207 31.667 31.669v38.464z"
        }
      ></path>
    </svg>
  );
}

export default ConferenceSvgrepoComsvg2Icon;
/* prettier-ignore-end */
