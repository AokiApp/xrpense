// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: akcNnSFg9qYk

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
import Layout from "../../Layout"; // plasmic-import: 8kcWfTTW5pIG/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import Copilot from "../../Copilot"; // plasmic-import: 3QoQepU800a-/component
import DefaultButton from "../../DefaultButton"; // plasmic-import: IXlVEWy595ii/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicWallet.module.css"; // plasmic-import: akcNnSFg9qYk/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UPP2br5JFIoC/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: tOAoYivXP3sa/icon

createPlasmicElementProxy;

export type PlasmicWallet__VariantMembers = {};
export type PlasmicWallet__VariantsArgs = {};
type VariantPropType = keyof PlasmicWallet__VariantsArgs;
export const PlasmicWallet__VariantProps = new Array<VariantPropType>();

export type PlasmicWallet__ArgsType = {
  onTxSubmit?: (tx_json: string) => void;
  address?: string;
};
type ArgPropType = keyof PlasmicWallet__ArgsType;
export const PlasmicWallet__ArgProps = new Array<ArgPropType>(
  "onTxSubmit",
  "address"
);

export type PlasmicWallet__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  img?: p.Flex<typeof p.PlasmicImg>;
  form?: p.Flex<typeof FormWrapper>;
  formField?: p.Flex<typeof FormItemWrapper>;
  textarea?: p.Flex<"textarea">;
  copilot?: p.Flex<typeof Copilot>;
  defaultButton?: p.Flex<typeof DefaultButton>;
};

export interface DefaultWalletProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWallet__RenderFunc(props: {
  variants: PlasmicWallet__VariantsArgs;
  args: PlasmicWallet__ArgsType;
  overrides: PlasmicWallet__OverridesType;
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
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: p.generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
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
          <Layout
            data-plasmic-name={"layout"}
            data-plasmic-override={overrides.layout}
            className={classNames("__wab_instance", sty.layout)}
            title={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8IFdZ
                )}
              >
                {"\u30a6\u30a9\u30ec\u30c3\u30c8"}
              </div>
            }
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__myTq3)}>
                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={(() => {
                      try {
                        return (
                          "https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=ripple%3A" +
                          $props.address
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gspp
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $props.address;
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
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: [
                        { label: "Name", name: "name", inputType: "Text" },
                        {
                          label: "Message",
                          name: "message",
                          inputType: "Text Area"
                        }
                      ],
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: "advanced",
                      onIsSubmittingChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      submitSlot: null,
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],
                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          data-plasmic-name={"formField"}
                          data-plasmic-override={overrides.formField}
                          className={classNames(
                            "__wab_instance",
                            sty.formField
                          )}
                          initialValue={JSON.stringify(
                            {
                              TransactionType: "Payment",
                              Account: $props.address,
                              Destination: "rBob",
                              Amount: "0.1",
                              Memos: [
                                {
                                  Memo: {
                                    MemoType: "Text",
                                    MemoData:
                                      "Hello! It's test transaction. Please replace yourself."
                                  }
                                }
                              ]
                            },
                            null,
                            2
                          )}
                          label={
                            "\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3(JSON\u5f62\u5f0f,\u672a\u7f72\u540d)"
                          }
                          name={"tx_json"}
                          rules={[{ ruleType: "required" }]}
                        >
                          <textarea
                            data-plasmic-name={"textarea"}
                            data-plasmic-override={overrides.textarea}
                            className={classNames(
                              projectcss.all,
                              projectcss.textarea,
                              sty.textarea
                            )}
                            placeholder={(() => {
                              try {
                                return JSON.stringify(
                                  {
                                    TransactionType: "Payment",
                                    Account: "rAlice",
                                    Destination: "rBob",
                                    Amount: "0.1",
                                    Memos: [
                                      {
                                        Memo: {
                                          MemoType: "Text",
                                          MemoData:
                                            "Hello! It's test transaction. Please replace yourself."
                                        }
                                      }
                                    ]
                                  },
                                  null,
                                  2
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />
                        </FormItemWrapper>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ft5Sz
                          )}
                        >
                          <Copilot
                            data-plasmic-name={"copilot"}
                            data-plasmic-override={overrides.copilot}
                            className={classNames(
                              "__wab_instance",
                              sty.copilot
                            )}
                            onGenerate={async result => {
                              const $steps = {};

                              $steps["runActionOnForm"] = true
                                ? (() => {
                                    const actionArgs = {
                                      tplRef: "form",
                                      action: "setFieldValue",
                                      args: [["tx_json"], result]
                                    };
                                    return (({ tplRef, action, args }) => {
                                      return $refs?.[tplRef]?.[action]?.(
                                        ...(args ?? [])
                                      );
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["runActionOnForm"] != null &&
                                typeof $steps["runActionOnForm"] === "object" &&
                                typeof $steps["runActionOnForm"].then ===
                                  "function"
                              ) {
                                $steps["runActionOnForm"] = await $steps[
                                  "runActionOnForm"
                                ];
                              }
                            }}
                            systemPrompt={(() => {
                              try {
                                return $state.form.value.tx_json;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                            whatToGen={
                              "\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3"
                            }
                          />

                          <DefaultButton
                            data-plasmic-name={"defaultButton"}
                            data-plasmic-override={overrides.defaultButton}
                            className={classNames(
                              "__wab_instance",
                              sty.defaultButton
                            )}
                            color={"primaryLt"}
                            onClick={async event => {
                              const $steps = {};

                              $steps["updateStateVariable"] = true
                                ? (() => {
                                    const actionArgs = {};
                                    return (({
                                      variable,
                                      value,
                                      startIndex,
                                      deleteCount
                                    }) => {
                                      if (!variable) {
                                        return;
                                      }
                                      const { objRoot, variablePath } =
                                        variable;
                                      undefined;
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["updateStateVariable"] != null &&
                                typeof $steps["updateStateVariable"] ===
                                  "object" &&
                                typeof $steps["updateStateVariable"].then ===
                                  "function"
                              ) {
                                $steps["updateStateVariable"] = await $steps[
                                  "updateStateVariable"
                                ];
                              }
                            }}
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__lSmy
                              )}
                              onClick={async event => {
                                const $steps = {};

                                $steps["runOnTxSubmit"] = true
                                  ? (() => {
                                      const actionArgs = {
                                        eventRef: $props["onTxSubmit"],
                                        args: [
                                          (() => {
                                            try {
                                              return $state.form.value.tx_json;
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
                                  $steps["runOnTxSubmit"] != null &&
                                  typeof $steps["runOnTxSubmit"] === "object" &&
                                  typeof $steps["runOnTxSubmit"].then ===
                                    "function"
                                ) {
                                  $steps["runOnTxSubmit"] = await $steps[
                                    "runOnTxSubmit"
                                  ];
                                }
                              }}
                            >
                              {
                                "\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u767a\u884c"
                              }
                            </div>
                          </DefaultButton>
                        </p.Stack>
                      </FormWrapper>
                    );
                  })()}
                </div>
              )}
            </ph.DataCtxReader>
          </Layout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layout",
    "img",
    "form",
    "formField",
    "textarea",
    "copilot",
    "defaultButton"
  ],
  layout: [
    "layout",
    "img",
    "form",
    "formField",
    "textarea",
    "copilot",
    "defaultButton"
  ],
  img: ["img"],
  form: ["form", "formField", "textarea", "copilot", "defaultButton"],
  formField: ["formField", "textarea"],
  textarea: ["textarea"],
  copilot: ["copilot"],
  defaultButton: ["defaultButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  img: typeof p.PlasmicImg;
  form: typeof FormWrapper;
  formField: typeof FormItemWrapper;
  textarea: "textarea";
  copilot: typeof Copilot;
  defaultButton: typeof DefaultButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWallet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWallet__VariantsArgs;
    args?: PlasmicWallet__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWallet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWallet__ArgsType,
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
          internalArgPropNames: PlasmicWallet__ArgProps,
          internalVariantPropNames: PlasmicWallet__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWallet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWallet";
  } else {
    func.displayName = `PlasmicWallet.${nodeName}`;
  }
  return func;
}

export const PlasmicWallet = Object.assign(
  // Top-level PlasmicWallet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    img: makeNodeComponent("img"),
    form: makeNodeComponent("form"),
    formField: makeNodeComponent("formField"),
    textarea: makeNodeComponent("textarea"),
    copilot: makeNodeComponent("copilot"),
    defaultButton: makeNodeComponent("defaultButton"),

    // Metadata about props expected for PlasmicWallet
    internalVariantProps: PlasmicWallet__VariantProps,
    internalArgProps: PlasmicWallet__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWallet;
/* prettier-ignore-end */
