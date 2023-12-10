// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: 3QoQepU800a-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

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
import Drawer from "../../Drawer"; // plasmic-import: us1o9GMarTi_/component
import DefaultButton from "../../DefaultButton"; // plasmic-import: IXlVEWy595ii/component
import Select from "../../Select"; // plasmic-import: Y7ZmvQv6glP1/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicCopilot.module.css"; // plasmic-import: 3QoQepU800a-/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UPP2br5JFIoC/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: tOAoYivXP3sa/icon

createPlasmicElementProxy;

export type PlasmicCopilot__VariantMembers = {};
export type PlasmicCopilot__VariantsArgs = {};
type VariantPropType = keyof PlasmicCopilot__VariantsArgs;
export const PlasmicCopilot__VariantProps = new Array<VariantPropType>();

export type PlasmicCopilot__ArgsType = {
  systemPrompt?: string;
  whatToGen?: React.ReactNode;
  onGenerate?: (result: string) => void;
};
type ArgPropType = keyof PlasmicCopilot__ArgsType;
export const PlasmicCopilot__ArgProps = new Array<ArgPropType>(
  "systemPrompt",
  "whatToGen",
  "onGenerate"
);

export type PlasmicCopilot__OverridesType = {
  root?: p.Flex<"div">;
  drawer?: p.Flex<typeof Drawer>;
  select?: p.Flex<typeof Select>;
  textarea?: p.Flex<"textarea">;
};

export interface DefaultCopilotProps {
  systemPrompt?: string;
  whatToGen?: React.ReactNode;
  onGenerate?: (result: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCopilot__RenderFunc(props: {
  variants: PlasmicCopilot__VariantsArgs;
  args: PlasmicCopilot__ArgsType;
  overrides: PlasmicCopilot__OverridesType;
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
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "suggestion",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "drawer.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

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
        sty.root
      )}
    >
      <Drawer
        data-plasmic-name={"drawer"}
        data-plasmic-override={overrides.drawer}
        className={classNames("__wab_instance", sty.drawer)}
        onOpenChange={p.generateStateOnChangeProp($state, ["drawer", "open"])}
        open={p.generateStateValueProp($state, ["drawer", "open"])}
        slot={
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hlxZu)}
          >
            <Select
              data-plasmic-name={"select"}
              data-plasmic-override={overrides.select}
              className={classNames("__wab_instance", sty.select)}
              color={"softOrange"}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["select", "value"])(
                  eventArgs[0]
                );
              }}
              options={(() => {
                const __composite = [
                  { value: null, label: null },
                  { value: null, label: null },
                  { value: null, label: null }
                ];
                __composite["0"]["value"] = "creative";
                __composite["0"]["label"] =
                  "\u3088\u308a\u5275\u9020\u7684\u306b";
                __composite["1"]["value"] = "balanced";
                __composite["1"]["label"] = "\u4e2d\u7acb";
                __composite["2"]["value"] = "formal";
                __composite["2"]["label"] =
                  "\u3088\u308a\u30d5\u30a9\u30fc\u30de\u30eb\u306b";
                return __composite;
              })()}
              value={p.generateStateValueProp($state, ["select", "value"])}
            />

            <textarea
              data-plasmic-name={"textarea"}
              data-plasmic-override={overrides.textarea}
              className={classNames(
                projectcss.all,
                projectcss.textarea,
                sty.textarea
              )}
              onChange={e => {
                p.generateStateOnChangeProp($state, ["textarea", "value"])(
                  e.target.value
                );
              }}
              placeholder={
                "\u3069\u306e\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u307e\u3059\u304b\uff1f\u4f55\u3092\u4ed8\u3051\u52a0\u3048\u307e\u3059\u304b\uff1f"
              }
              ref={ref => {
                $refs["textarea"] = ref;
              }}
              value={
                p.generateStateValueProp($state, ["textarea", "value"]) ?? ""
              }
            />

            <DefaultButton
              className={classNames("__wab_instance", sty.defaultButton__lwdYf)}
              color={"primary"}
              onClick={async event => {
                const $steps = {};

                $steps["httpPost"] = true
                  ? (() => {
                      const actionArgs = {
                        dataOp: {
                          sourceId: "4d99sXKuLP1dCL8DySf3WN",
                          opId: "96ada5af-e7c5-4a2a-b54d-52b3dd24d276",
                          userArgs: {
                            body: [
                              $props.systemPrompt ||
                                "You are helpful assistant.",
                              $state.textarea.value ||
                                "Please generate the text I desired.",
                              $state.select.value === "creative"
                                ? 1
                                : $state.select.value === "balanced"
                                ? 0.5
                                : 0
                            ]
                          },
                          cacheKey: null,
                          invalidatedKeys: ["plasmic_refresh_all"],
                          roleId: null
                        }
                      };
                      return (async ({ dataOp, continueOnError }) => {
                        try {
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
                          await plasmicInvalidate(dataOp.invalidatedKeys);
                          return response;
                        } catch (e) {
                          if (!continueOnError) {
                            throw e;
                          }
                          return e;
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["httpPost"] != null &&
                  typeof $steps["httpPost"] === "object" &&
                  typeof $steps["httpPost"].then === "function"
                ) {
                  $steps["httpPost"] = await $steps["httpPost"];
                }

                $steps["updateSuggestion"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["suggestion"]
                        },
                        operation: 0,
                        value:
                          $steps.httpPost.data.response.choices[0].message
                            .content
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        p.set(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSuggestion"] != null &&
                  typeof $steps["updateSuggestion"] === "object" &&
                  typeof $steps["updateSuggestion"].then === "function"
                ) {
                  $steps["updateSuggestion"] = await $steps["updateSuggestion"];
                }
              }}
              size={"compact"}
            >
              {"\u751f\u6210"}
            </DefaultButton>
            {(() => {
              try {
                return $state.suggestion.length;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return false;
                }
                throw e;
              }
            })() ? (
              <div className={classNames(projectcss.all, sty.freeBox__zp02G)}>
                <div className={classNames(projectcss.all, sty.freeBox__uefP4)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4Rj7W
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $state.suggestion;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <DefaultButton
                    className={classNames(
                      "__wab_instance",
                      sty.defaultButton__sPtha
                    )}
                    color={"link"}
                    onClick={async event => {
                      const $steps = {};

                      $steps["runOnGenerate"] = true
                        ? (() => {
                            const actionArgs = {
                              eventRef: $props["onGenerate"],
                              args: [
                                (() => {
                                  try {
                                    return $state.suggestion;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              ]
                            };
                            return (({ eventRef, args }) => {
                              return eventRef?.(...(args ?? []));
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runOnGenerate"] != null &&
                        typeof $steps["runOnGenerate"] === "object" &&
                        typeof $steps["runOnGenerate"].then === "function"
                      ) {
                        $steps["runOnGenerate"] = await $steps["runOnGenerate"];
                      }

                      $steps["updateDrawerOpen"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["drawer", "open"]
                              },
                              operation: 0,
                              value: false
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              p.set(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateDrawerOpen"] != null &&
                        typeof $steps["updateDrawerOpen"] === "object" &&
                        typeof $steps["updateDrawerOpen"].then === "function"
                      ) {
                        $steps["updateDrawerOpen"] = await $steps[
                          "updateDrawerOpen"
                        ];
                      }
                    }}
                    size={"compact"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__h8VB1
                      )}
                    >
                      {"\u78ba\u5b9a"}
                    </div>
                  </DefaultButton>
                </div>
              </div>
            ) : null}
          </p.Stack>
        }
        trigger={
          <DefaultButton
            className={classNames("__wab_instance", sty.defaultButton__wK1Py)}
            color={"negativeLt"}
            size={"compact"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__cX6CZ)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bd8HT
                )}
              >
                {" \ud83e\ude84 AI\u3092\u4f7f\u3063\u3066"}
              </div>
              {p.renderPlasmicSlot({
                defaultContents: "\u8cbb\u306e\u5185\u5bb9",
                value: args.whatToGen,
                className: classNames(sty.slotTargetWhatToGen)
              })}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vh3DM
                )}
              >
                {"\u3092\u8003\u3048\u3066\u307f\u308b"}
              </div>
            </div>
          </DefaultButton>
        }
      >
        {"AI\u3092\u4f7f\u3046"}
      </Drawer>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "drawer", "select", "textarea"],
  drawer: ["drawer", "select", "textarea"],
  select: ["select"],
  textarea: ["textarea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  drawer: typeof Drawer;
  select: typeof Select;
  textarea: "textarea";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCopilot__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCopilot__VariantsArgs;
    args?: PlasmicCopilot__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCopilot__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCopilot__ArgsType,
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
          internalArgPropNames: PlasmicCopilot__ArgProps,
          internalVariantPropNames: PlasmicCopilot__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCopilot__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopilot";
  } else {
    func.displayName = `PlasmicCopilot.${nodeName}`;
  }
  return func;
}

export const PlasmicCopilot = Object.assign(
  // Top-level PlasmicCopilot renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    drawer: makeNodeComponent("drawer"),
    select: makeNodeComponent("select"),
    textarea: makeNodeComponent("textarea"),

    // Metadata about props expected for PlasmicCopilot
    internalVariantProps: PlasmicCopilot__VariantProps,
    internalArgProps: PlasmicCopilot__ArgProps
  }
);

export default PlasmicCopilot;
/* prettier-ignore-end */
