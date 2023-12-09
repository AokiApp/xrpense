// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: m_NbzmE7hBTT

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LayoutBase from "../../LayoutBase"; // plasmic-import: xHlJ0wygH-6y/component
import CreateStep from "../../CreateStep"; // plasmic-import: 0Id__lT8w_bK/component
import Button from "../../Button"; // plasmic-import: IXlVEWy595ii/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicCreateComplete.module.css"; // plasmic-import: m_NbzmE7hBTT/css

import CompleteIcon from "./icons/PlasmicIcon__Complete"; // plasmic-import: pTJFuCWk8NGr/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UPP2br5JFIoC/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: tOAoYivXP3sa/icon

createPlasmicElementProxy;

export type PlasmicCreateComplete__VariantMembers = {};
export type PlasmicCreateComplete__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreateComplete__VariantsArgs;
export const PlasmicCreateComplete__VariantProps = new Array<VariantPropType>();

export type PlasmicCreateComplete__ArgsType = {};
type ArgPropType = keyof PlasmicCreateComplete__ArgsType;
export const PlasmicCreateComplete__ArgProps = new Array<ArgPropType>();

export type PlasmicCreateComplete__OverridesType = {
  root?: p.Flex<"div">;
  layoutBase?: p.Flex<typeof LayoutBase>;
  createStep?: p.Flex<typeof CreateStep>;
  section?: p.Flex<"section">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultCreateCompleteProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCreateComplete__RenderFunc(props: {
  variants: PlasmicCreateComplete__VariantsArgs;
  args: PlasmicCreateComplete__ArgsType;
  overrides: PlasmicCreateComplete__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <LayoutBase
            data-plasmic-name={"layoutBase"}
            data-plasmic-override={overrides.layoutBase}
            className={classNames("__wab_instance", sty.layoutBase)}
          >
            <CreateStep
              data-plasmic-name={"createStep"}
              data-plasmic-override={overrides.createStep}
              className={classNames("__wab_instance", sty.createStep)}
              currentStep={4}
            />

            <section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__reTac)}>
                <CompleteIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"\u7533\u8acb\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__lOHwW)}>
                <Button
                  className={classNames("__wab_instance", sty.button__qKkeE)}
                  color={"primaryLt"}
                  link={`/`}
                >
                  {"\u30db\u30fc\u30e0\u306b\u623b\u308b"}
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__de8Ha)}
                  color={"clear"}
                  link={`/create`}
                >
                  {"\u6b21\u306e\u7533\u8acb\u3092\u3059\u308b"}
                </Button>
              </div>
            </section>
          </LayoutBase>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layoutBase", "createStep", "section", "svg", "text"],
  layoutBase: ["layoutBase", "createStep", "section", "svg", "text"],
  createStep: ["createStep"],
  section: ["section", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutBase: typeof LayoutBase;
  createStep: typeof CreateStep;
  section: "section";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCreateComplete__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCreateComplete__VariantsArgs;
    args?: PlasmicCreateComplete__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCreateComplete__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCreateComplete__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCreateComplete__ArgProps,
          internalVariantPropNames: PlasmicCreateComplete__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCreateComplete__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCreateComplete";
  } else {
    func.displayName = `PlasmicCreateComplete.${nodeName}`;
  }
  return func;
}

export const PlasmicCreateComplete = Object.assign(
  // Top-level PlasmicCreateComplete renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutBase: makeNodeComponent("layoutBase"),
    createStep: makeNodeComponent("createStep"),
    section: makeNodeComponent("section"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCreateComplete
    internalVariantProps: PlasmicCreateComplete__VariantProps,
    internalArgProps: PlasmicCreateComplete__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCreateComplete;
/* prettier-ignore-end */
