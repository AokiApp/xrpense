// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: 32to5JyqkBfw

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Layout from "../../Layout"; // plasmic-import: 8kcWfTTW5pIG/component
import { AntdSingleCollapse } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { singleCollapseHelpers as AntdSingleCollapse_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import Button from "../../Button"; // plasmic-import: IXlVEWy595ii/component
import ReqItem from "../../ReqItem"; // plasmic-import: h2Cqfb2WKnuT/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsvAp4RmrZq8S } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vAp4rmrZq-8s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicHistory.module.css"; // plasmic-import: 32to5JyqkBfw/css

import SearchSvgrepoComsvgIcon from "./icons/PlasmicIcon__SearchSvgrepoComsvg"; // plasmic-import: osr7ZWuZ3w4-/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UPP2br5JFIoC/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: tOAoYivXP3sa/icon

createPlasmicElementProxy;

export type PlasmicHistory__VariantMembers = {};
export type PlasmicHistory__VariantsArgs = {};
type VariantPropType = keyof PlasmicHistory__VariantsArgs;
export const PlasmicHistory__VariantProps = new Array<VariantPropType>();

export type PlasmicHistory__ArgsType = {};
type ArgPropType = keyof PlasmicHistory__ArgsType;
export const PlasmicHistory__ArgProps = new Array<ArgPropType>();

export type PlasmicHistory__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  collapse?: p.Flex<typeof AntdSingleCollapse>;
  svg?: p.Flex<"svg">;
  form?: p.Flex<typeof FormWrapper>;
  input?: p.Flex<typeof AntdInput>;
  button?: p.Flex<typeof Button>;
  reqItem?: p.Flex<typeof ReqItem>;
};

export interface DefaultHistoryProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHistory__RenderFunc(props: {
  variants: PlasmicHistory__VariantsArgs;
  args: PlasmicHistory__ArgsType;
  overrides: PlasmicHistory__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
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
      },
      {
        path: "collapse.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,

        onMutate: p.generateOnMutateForSpec("open", AntdSingleCollapse_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    histories: usePlasmicDataOp(() => {
      return {
        sourceId: "AtiexzeE27KKVJrwX6s5c",
        opId: "efa029f5-b415-4760-a81b-d9bb78539156",
        userArgs: {},
        cacheKey: `plasmic.$.efa029f5-b415-4760-a81b-d9bb78539156.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvAp4RmrZq8S()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHistory.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHistory.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHistory.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHistory.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHistory.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHistory.pageMetadata.description}
        />
      </Head>

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
            title={"\u7533\u8acb\u5c65\u6b74"}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__gher8)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4Q8MQ)}
                  >
                    {(() => {
                      const child$Props = {
                        bordered: false,
                        className: classNames("__wab_instance", sty.collapse),
                        defaultOpen: true,
                        disabled: false,
                        expandIcon: null,
                        expandIconPosition: "end",
                        extra: null,
                        ghost: false,
                        headerClass: classNames({
                          [sty["pcls_TY83nqeqdxnp"]]: true
                        }),
                        label2: (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__l6TEm
                            )}
                          >
                            <SearchSvgrepoComsvgIcon
                              data-plasmic-name={"svg"}
                              data-plasmic-override={overrides.svg}
                              className={classNames(projectcss.all, sty.svg)}
                              role={"img"}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__cyQY
                              )}
                            >
                              {"\u691c\u7d22"}
                            </div>
                          </p.Stack>
                        ),
                        onChange: p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "open",
                          ["collapse", "open"],
                          AntdSingleCollapse_Helpers
                        ),
                        open: p.generateStateValueProp($state, [
                          "collapse",
                          "open"
                        ]),
                        rotateCustomExpandIcon: true,
                        showArrow: false,
                        size: "small"
                      };
                      p.initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "open",
                            plasmicStateName: "collapse.open"
                          }
                        ],
                        [],
                        AntdSingleCollapse_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdSingleCollapse
                          data-plasmic-name={"collapse"}
                          data-plasmic-override={overrides.collapse}
                          {...child$Props}
                        >
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
                              formItems: undefined,
                              labelCol: { span: 8, horizontalOnly: true },
                              layout: "horizontal",
                              mode: undefined,
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
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__xun0K
                                  )}
                                  hidden={false}
                                  label={"\u30bf\u30a4\u30c8\u30eb"}
                                  name={"title"}
                                  rules={[]}
                                >
                                  <AntdInput
                                    className={classNames(
                                      "__wab_instance",
                                      sty.input
                                    )}
                                  />
                                </FormItemWrapper>
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__mrBx7
                                  )}
                                  label={"\u65e5\u4ed8(\u4ee5\u964d)"}
                                  name={"since"}
                                >
                                  <AntdDatePicker
                                    className={classNames(
                                      "__wab_instance",
                                      sty.dateTimePicker___4YltY
                                    )}
                                    popupScopeClassName={
                                      sty[
                                        "dateTimePicker___4YltY__datePickerPopup"
                                      ]
                                    }
                                  />
                                </FormItemWrapper>
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__ye8NP
                                  )}
                                  label={"\u65e5\u4ed8(\u4ee5\u524d)"}
                                  name={"until"}
                                >
                                  <AntdDatePicker
                                    className={classNames(
                                      "__wab_instance",
                                      sty.dateTimePicker__jtIl5
                                    )}
                                    popupScopeClassName={
                                      sty[
                                        "dateTimePicker__jtIl5__datePickerPopup"
                                      ]
                                    }
                                  />
                                </FormItemWrapper>
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__o9ZOr
                                  )}
                                  label={"\u91d1\u984d(\u4ee5\u4e0a)"}
                                  name={"greater"}
                                >
                                  <AntdInputNumber
                                    className={classNames(
                                      "__wab_instance",
                                      sty.numberInput___9CTed
                                    )}
                                    type={"number"}
                                  />
                                </FormItemWrapper>
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__zhBjg
                                  )}
                                  label={"\u91d1\u984d(\u4ee5\u4e0b)"}
                                  name={"less"}
                                >
                                  <AntdInputNumber
                                    className={classNames(
                                      "__wab_instance",
                                      sty.numberInput__aJ8D1
                                    )}
                                    type={"number"}
                                  />
                                </FormItemWrapper>
                                <Button
                                  className={classNames(
                                    "__wab_instance",
                                    sty.button
                                  )}
                                  color={"primary"}
                                  size={"compact"}
                                  submitsForm={true}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text___6O7Kn
                                    )}
                                  >
                                    {"\u691c\u7d22"}
                                  </div>
                                </Button>
                              </FormWrapper>
                            );
                          })()}
                        </AntdSingleCollapse>
                      );
                    })()}
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zSvy9)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.histories.data.response.data.expense;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <ReqItem
                          data-plasmic-name={"reqItem"}
                          data-plasmic-override={overrides.reqItem}
                          amount={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.amount;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\uffe55000";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                          bill={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.user.name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u682a\u5f0f\u4f1a\u793eXX";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                          className={classNames("__wab_instance", sty.reqItem)}
                          date={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return new Date(
                                    currentItem.updated_at
                                  ).toLocaleDateString("ja", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "numeric"
                                  });
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "2023/12/7";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                          key={currentIndex}
                          title={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.title;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u30bf\u30a4\u30c8\u30eb";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                          unixtime={(() => {
                            try {
                              return undefined;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return 10000000;
                              }
                              throw e;
                            }
                          })()}
                        />
                      );
                    })}
                  </p.Stack>
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
    "collapse",
    "svg",
    "form",
    "input",
    "button",
    "reqItem"
  ],
  layout: ["layout", "collapse", "svg", "form", "input", "button", "reqItem"],
  collapse: ["collapse", "svg", "form", "input", "button"],
  svg: ["svg"],
  form: ["form", "input", "button"],
  input: ["input"],
  button: ["button"],
  reqItem: ["reqItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  collapse: typeof AntdSingleCollapse;
  svg: "svg";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  button: typeof Button;
  reqItem: typeof ReqItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHistory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHistory__VariantsArgs;
    args?: PlasmicHistory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHistory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHistory__ArgsType,
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
          internalArgPropNames: PlasmicHistory__ArgProps,
          internalVariantPropNames: PlasmicHistory__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHistory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHistory";
  } else {
    func.displayName = `PlasmicHistory.${nodeName}`;
  }
  return func;
}

export const PlasmicHistory = Object.assign(
  // Top-level PlasmicHistory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    collapse: makeNodeComponent("collapse"),
    svg: makeNodeComponent("svg"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    reqItem: makeNodeComponent("reqItem"),

    // Metadata about props expected for PlasmicHistory
    internalVariantProps: PlasmicHistory__VariantProps,
    internalArgProps: PlasmicHistory__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "経費申請履歴",
      description: "経費申請の履歴を一覧で見ることができるページ\n",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHistory;
/* prettier-ignore-end */
