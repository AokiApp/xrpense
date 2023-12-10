// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: 53hvCvCAAUUJ

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicAlert.module.css"; // plasmic-import: 53hvCvCAAUUJ/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: g9tRk06ouNlG/icon

createPlasmicElementProxy;

export type PlasmicAlert__VariantMembers = {
  noIcon: "noIcon";
  noHeader: "noHeader";
  noBody: "noBody";
};
export type PlasmicAlert__VariantsArgs = {
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
};
type VariantPropType = keyof PlasmicAlert__VariantsArgs;
export const PlasmicAlert__VariantProps = new Array<VariantPropType>(
  "noIcon",
  "noHeader",
  "noBody"
);

export type PlasmicAlert__ArgsType = {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAlert__ArgsType;
export const PlasmicAlert__ArgProps = new Array<ArgPropType>(
  "icon",
  "header",
  "body"
);

export type PlasmicAlert__OverridesType = {
  root?: p.Flex<"div">;
  h6?: p.Flex<"h6">;
};

export interface DefaultAlertProps {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAlert__RenderFunc(props: {
  variants: PlasmicAlert__VariantsArgs;
  args: PlasmicAlert__ArgsType;
  overrides: PlasmicAlert__OverridesType;
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
        path: "noIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noIcon
      },
      {
        path: "noHeader",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noHeader
      },
      {
        path: "noBody",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noBody
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
        sty.root,
        { [sty.rootnoBody]: hasVariant($state, "noBody", "noBody") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hWfFw, {
          [sty.freeBoxnoBody__hWfFWo4Xiv]: hasVariant(
            $state,
            "noBody",
            "noBody"
          ),
          [sty.freeBoxnoHeader__hWfFWhPula]: hasVariant(
            $state,
            "noHeader",
            "noHeader"
          ),
          [sty.freeBoxnoIcon__hWfFWqewN6]: hasVariant(
            $state,
            "noIcon",
            "noIcon"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__gBhu5, {
            [sty.freeBoxnoIcon__gBhu5QewN6]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon3Icon
                className={classNames(projectcss.all, sty.svg__xNDzD)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zsfcY, {
            [sty.freeBoxnoHeader__zsfcYhPula]: hasVariant(
              $state,
              "noHeader",
              "noHeader"
            ),
            [sty.freeBoxnoIcon__zsfcYqewN6]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          <h6
            data-plasmic-name={"h6"}
            data-plasmic-override={overrides.h6}
            className={classNames(projectcss.all, projectcss.h6, sty.h6, {
              [sty.h6noHeader]: hasVariant($state, "noHeader", "noHeader"),
              [sty.h6noIcon]: hasVariant($state, "noIcon", "noIcon")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Heads up!",
              value: args.header
            })}
          </h6>
          <div
            className={classNames(projectcss.all, sty.freeBox__fzSzx, {
              [sty.freeBoxnoBody__fzSzxo4Xiv]: hasVariant(
                $state,
                "noBody",
                "noBody"
              ),
              [sty.freeBoxnoHeader__fzSzxhPula]: hasVariant(
                $state,
                "noHeader",
                "noHeader"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Here is the body text description for the alert!",
              value: args.body
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAlert__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAlert__VariantsArgs;
    args?: PlasmicAlert__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAlert__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAlert__ArgsType,
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
          internalArgPropNames: PlasmicAlert__ArgProps,
          internalVariantPropNames: PlasmicAlert__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAlert__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlert";
  } else {
    func.displayName = `PlasmicAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicAlert = Object.assign(
  // Top-level PlasmicAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicAlert
    internalVariantProps: PlasmicAlert__VariantProps,
    internalArgProps: PlasmicAlert__ArgProps
  }
);

export default PlasmicAlert;
/* prettier-ignore-end */