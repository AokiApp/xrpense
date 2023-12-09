// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: TLGCmAakJkGm

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
import IconButton from "../../IconButton"; // plasmic-import: c6xa4h_PpvrO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicDecoratedSection.module.css"; // plasmic-import: TLGCmAakJkGm/css

import OpenExternalSvgrepoComsvgIcon from "./icons/PlasmicIcon__OpenExternalSvgrepoComsvg"; // plasmic-import: r2Sk3XCc6h2H/icon

createPlasmicElementProxy;

export type PlasmicDecoratedSection__VariantMembers = {
  noTitle: "noTitle";
  noAction: "noAction";
};
export type PlasmicDecoratedSection__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  noAction?: SingleBooleanChoiceArg<"noAction">;
};
type VariantPropType = keyof PlasmicDecoratedSection__VariantsArgs;
export const PlasmicDecoratedSection__VariantProps = new Array<VariantPropType>(
  "noTitle",
  "noAction"
);

export type PlasmicDecoratedSection__ArgsType = {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDecoratedSection__ArgsType;
export const PlasmicDecoratedSection__ArgProps = new Array<ArgPropType>(
  "actions",
  "children",
  "title"
);

export type PlasmicDecoratedSection__OverridesType = {
  root?: p.Flex<"section">;
};

export interface DefaultDecoratedSectionProps {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  noAction?: SingleBooleanChoiceArg<"noAction">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDecoratedSection__RenderFunc(props: {
  variants: PlasmicDecoratedSection__VariantsArgs;
  args: PlasmicDecoratedSection__ArgsType;
  overrides: PlasmicDecoratedSection__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      },
      {
        path: "noAction",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noAction
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <section
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8SdB3, {
          [sty.freeBoxnoAction___8SdB30BKlX]: hasVariant(
            $state,
            "noAction",
            "noAction"
          ),
          [sty.freeBoxnoTitle___8SdB3542Ar]: hasVariant(
            $state,
            "noTitle",
            "noTitle"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__eybvz)}>
          {p.renderPlasmicSlot({
            defaultContents: "\u304a\u77e5\u3089\u305b",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9Wfyy, {
            [sty.freeBoxnoAction___9Wfyy0BKlX]: hasVariant(
              $state,
              "noAction",
              "noAction"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <IconButton
                className={classNames("__wab_instance", sty.iconButton__yMXx)}
              />
            ),

            value: args.actions
          })}
        </p.Stack>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__fEgU2)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div className={classNames(projectcss.all, sty.freeBox__x6Vop)} />
          ),

          value: args.children
        })}
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDecoratedSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDecoratedSection__VariantsArgs;
    args?: PlasmicDecoratedSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDecoratedSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDecoratedSection__ArgsType,
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
          internalArgPropNames: PlasmicDecoratedSection__ArgProps,
          internalVariantPropNames: PlasmicDecoratedSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDecoratedSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDecoratedSection";
  } else {
    func.displayName = `PlasmicDecoratedSection.${nodeName}`;
  }
  return func;
}

export const PlasmicDecoratedSection = Object.assign(
  // Top-level PlasmicDecoratedSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDecoratedSection
    internalVariantProps: PlasmicDecoratedSection__VariantProps,
    internalArgProps: PlasmicDecoratedSection__ArgProps
  }
);

export default PlasmicDecoratedSection;
/* prettier-ignore-end */
