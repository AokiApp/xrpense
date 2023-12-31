// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicStep, DefaultStepProps } from "./plasmic/xrpense/PlasmicStep";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface StepProps extends Omit<DefaultStepProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultStepProps altogether and have
// total control over the props for your component.
export interface StepProps extends DefaultStepProps {}

function Step_(props: StepProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicStep to render this component as it was

  // Props you can pass into PlasmicStep are:

  // By default, we are just piping all StepProps here, but feel free
  // to do whatever works for you.

  return <PlasmicStep root={{ ref }} {...props} />;
}

const Step = React.forwardRef(Step_);
export default Step;
