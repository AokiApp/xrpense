// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: _frrYhJVjyko

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
import DecoratedSection from "../../DecoratedSection"; // plasmic-import: TLGCmAakJkGm/component
import { AntdTooltip } from "@plasmicpkgs/antd5/skinny/registerTooltip";
import IconButton from "../../IconButton"; // plasmic-import: c6xa4h_PpvrO/component
import KvItem from "../../KvItem"; // plasmic-import: Haxw2MIMlmpq/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicCustomer.module.css"; // plasmic-import: _frrYhJVjyko/css

import PencilSvgrepoComsvgIcon from "./icons/PlasmicIcon__PencilSvgrepoComsvg"; // plasmic-import: ZLkLNe8FZ2MH/icon

createPlasmicElementProxy;

export type PlasmicCustomer__VariantMembers = {};
export type PlasmicCustomer__VariantsArgs = {};
type VariantPropType = keyof PlasmicCustomer__VariantsArgs;
export const PlasmicCustomer__VariantProps = new Array<VariantPropType>();

export type PlasmicCustomer__ArgsType = {};
type ArgPropType = keyof PlasmicCustomer__ArgsType;
export const PlasmicCustomer__ArgProps = new Array<ArgPropType>();

export type PlasmicCustomer__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  img?: p.Flex<typeof p.PlasmicImg>;
  tooltip?: p.Flex<typeof AntdTooltip>;
};

export interface DefaultCustomerProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCustomer__RenderFunc(props: {
  variants: PlasmicCustomer__VariantsArgs;
  args: PlasmicCustomer__ArgsType;
  overrides: PlasmicCustomer__OverridesType;
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

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "AtiexzeE27KKVJrwX6s5c",
        opId: "6e704ee3-f5f4-46ca-bd9a-93b213948f72",
        userArgs: {},
        cacheKey: `plasmic.$.6e704ee3-f5f4-46ca-bd9a-93b213948f72.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
            title={"\u304a\u5ba2\u69d8\u60c5\u5831"}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uZeH)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4NXxu)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"128px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"128px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/xrpense/images/faceijpg.jpg",
                        fullWidth: 987,
                        fullHeight: 987,
                        aspectRatio: undefined
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__hVvla)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__p0Z9U
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__j5HNl
                          )}
                        >
                          {"\u59d3"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___6WMp8
                          )}
                        >
                          {"(\u65e7\u59d3)"}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__knGr0
                        )}
                      >
                        {"\u540d"}
                      </div>
                    </p.Stack>
                  </div>
                  <DecoratedSection
                    actions={
                      <AntdTooltip
                        data-plasmic-name={"tooltip"}
                        data-plasmic-override={overrides.tooltip}
                        className={classNames("__wab_instance", sty.tooltip)}
                        titleText={
                          "\u57fa\u672c\u60c5\u5831\u306e\u7de8\u96c6\u306f\u4e0a\u9577\u3078\u304a\u554f\u3044\u5408\u308f\u305b\u4e0b\u3055\u3044\u3002\u3000"
                        }
                      >
                        <IconButton
                          className={classNames(
                            "__wab_instance",
                            sty.iconButton__rnf0L
                          )}
                          label={``}
                        >
                          <PencilSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wBeHv
                            )}
                            role={"img"}
                          />
                        </IconButton>
                      </AntdTooltip>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.decoratedSection__sCnpl
                    )}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___7LyPk
                        )}
                      >
                        {"\u57fa\u672c\u60c5\u5831"}
                      </div>
                    }
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__oRlLs)}
                    >
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return [
                              [
                                "企業",
                                $queries.query.data.response.data.user_by_pk.org
                                  .name
                              ],
                              [
                                "社員ID",
                                $queries.query.data.response.data.user_by_pk
                                  .employee_code
                              ],
                              [
                                "名前",
                                $queries.query.data.response.data.user_by_pk
                                  .name
                              ],
                              [
                                "メールアドレス",
                                $queries.query.data.response.data.user_by_pk
                                  .email
                              ]
                            ];
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
                          <KvItem
                            className={classNames(
                              "__wab_instance",
                              sty.kvItem__k3Asr
                            )}
                            key={currentIndex}
                            label={
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem[0];
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "\u30ad\u30fc\u540d";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            }
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem[1];
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </KvItem>
                        );
                      })}
                    </div>
                  </DecoratedSection>
                  <DecoratedSection
                    actions={
                      <IconButton
                        className={classNames(
                          "__wab_instance",
                          sty.iconButton__stXpC
                        )}
                        to={`/customer/edit`}
                      >
                        <PencilSvgrepoComsvgIcon
                          className={classNames(projectcss.all, sty.svg__v9LX)}
                          role={"img"}
                        />
                      </IconButton>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.decoratedSection___7Tgam
                    )}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__i6Ej4
                        )}
                      >
                        {"\u7d4c\u8cbb\u7533\u8acb\u8a2d\u5b9a"}
                      </div>
                    }
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ljJ5)}
                    >
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return [
                              [
                                "振込先アドレス",
                                $queries.query.data.response.data.user_by_pk
                                  .redeem_address || "未設定"
                              ],
                              [
                                "宛先タグ",
                                $queries.query.data.response.data.user_by_pk
                                  .redeem_tag || "不要"
                              ]
                            ];
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
                          <KvItem
                            className={classNames(
                              "__wab_instance",
                              sty.kvItem__bVmnR
                            )}
                            key={currentIndex}
                            label={
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem[0];
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "\u30ad\u30fc\u540d";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            }
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem[1];
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c\u30d0\u30ea\u30e5\u30fc\u540d\u304c";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </KvItem>
                        );
                      })}
                    </div>
                  </DecoratedSection>
                </p.Stack>
              )}
            </ph.DataCtxReader>
          </Layout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layout", "img", "tooltip"],
  layout: ["layout", "img", "tooltip"],
  img: ["img"],
  tooltip: ["tooltip"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  img: typeof p.PlasmicImg;
  tooltip: typeof AntdTooltip;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCustomer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCustomer__VariantsArgs;
    args?: PlasmicCustomer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCustomer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCustomer__ArgsType,
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
          internalArgPropNames: PlasmicCustomer__ArgProps,
          internalVariantPropNames: PlasmicCustomer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCustomer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCustomer";
  } else {
    func.displayName = `PlasmicCustomer.${nodeName}`;
  }
  return func;
}

export const PlasmicCustomer = Object.assign(
  // Top-level PlasmicCustomer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    img: makeNodeComponent("img"),
    tooltip: makeNodeComponent("tooltip"),

    // Metadata about props expected for PlasmicCustomer
    internalVariantProps: PlasmicCustomer__VariantProps,
    internalArgProps: PlasmicCustomer__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCustomer;
/* prettier-ignore-end */