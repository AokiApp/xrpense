// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrainSvgrepoComsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrainSvgrepoComsvg2Icon(props: TrainSvgrepoComsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M431.665 356.848V147.207c0-48.019-38.916-86.944-86.943-86.944h-40.363l4.812-42.824h8.813c9.435 0 17.508 5.74 20.965 13.898l16.06-6.779v-.008C348.929 10.124 334.641.018 317.984 0L193.999.009c-16.639.009-30.928 10.116-37.016 24.541l16.06 6.796c3.466-8.166 11.539-13.906 20.956-13.897h8.823l4.81 42.815h-40.354c-48.01 0-86.942 38.924-86.942 86.944v209.641c0 36.403 26.483 66.736 61.208 72.773L87.011 512h48.488l22.378-33.823h196.264L376.519 512h48.47l-54.516-82.379c34.709-6.045 61.192-36.369 61.192-72.773zM291.621 17.44l-4.803 42.824h-61.635l-4.819-42.815 71.257-.009zM180.715 99.299h150.57v25.095h-150.57V99.299zm-45.302 81.11c0-10.917 8.839-19.773 19.756-19.773h201.664c10.916 0 19.773 8.856 19.773 19.773v65.96c0 10.917-8.857 19.764-19.773 19.764H155.168c-10.916 0-19.756-8.847-19.756-19.764v-65.96zm18.819 198.086c-12.739 0-23.06-10.321-23.06-23.043 0-12.739 10.321-23.052 23.06-23.052 12.722 0 23.043 10.313 23.043 23.052 0 12.722-10.321 23.043-23.043 23.043zm18.189 77.695l16.844-25.461h133.471l16.844 25.461H172.421zm185.347-77.695c-12.722 0-23.043-10.321-23.043-23.043 0-12.739 10.321-23.052 23.043-23.052 12.739 0 23.06 10.313 23.06 23.052 0 12.722-10.321 23.043-23.06 23.043z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrainSvgrepoComsvg2Icon;
/* prettier-ignore-end */
