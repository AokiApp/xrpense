// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4QmempJ4uAWNpTRouKWPHf
// Component: s6l-4R3u5jmn

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
import IconButton from "../../IconButton"; // plasmic-import: c6xa4h_PpvrO/component
import KvItem from "../../KvItem"; // plasmic-import: Haxw2MIMlmpq/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_xrpense.module.css"; // plasmic-import: 4QmempJ4uAWNpTRouKWPHf/projectcss
import sty from "./PlasmicHistoryDetail.module.css"; // plasmic-import: s6l-4R3u5jmn/css

import OpenExternalSvgrepoComsvgIcon from "./icons/PlasmicIcon__OpenExternalSvgrepoComsvg"; // plasmic-import: r2Sk3XCc6h2H/icon

createPlasmicElementProxy;

export type PlasmicHistoryDetail__VariantMembers = {};
export type PlasmicHistoryDetail__VariantsArgs = {};
type VariantPropType = keyof PlasmicHistoryDetail__VariantsArgs;
export const PlasmicHistoryDetail__VariantProps = new Array<VariantPropType>();

export type PlasmicHistoryDetail__ArgsType = {};
type ArgPropType = keyof PlasmicHistoryDetail__ArgsType;
export const PlasmicHistoryDetail__ArgProps = new Array<ArgPropType>();

export type PlasmicHistoryDetail__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  freeBox?: p.Flex<"div">;
  decoratedSection?: p.Flex<typeof DecoratedSection>;
  kvItem?: p.Flex<typeof KvItem>;
};

export interface DefaultHistoryDetailProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHistoryDetail__RenderFunc(props: {
  variants: PlasmicHistoryDetail__VariantsArgs;
  args: PlasmicHistoryDetail__ArgsType;
  overrides: PlasmicHistoryDetail__OverridesType;
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
        opId: "1b62aca1-6ae1-48ff-a099-55ccdbfeb4d2",
        userArgs: {},
        cacheKey: `plasmic.$.1b62aca1-6ae1-48ff-a099-55ccdbfeb4d2.$.`,
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
            title={"\u7533\u8acb\u5c65\u6b74\u306e\u8a73\u7d30"}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <DecoratedSection
                    data-plasmic-name={"decoratedSection"}
                    data-plasmic-override={overrides.decoratedSection}
                    className={classNames(
                      "__wab_instance",
                      sty.decoratedSection
                    )}
                    title={
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.query.data.response.data.user_by_pk
                              .expenses[1].id;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "\u57fa\u672c\u60c5\u5831";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    }
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return [
                            [
                              "発行日",
                              $queries.query.data.response.data.user_by_pk.expenses[1].issued_at.replace(
                                /-/g,
                                "/"
                              )
                            ],
                            [
                              "金額",
                              $queries.query.data.response.data.user_by_pk
                                .expenses[1].amount
                            ],
                            [
                              "申請者",
                              $queries.query.data.response.data.user_by_pk.name
                            ],
                            [
                              "申請日",
                              new Date(
                                $queries.query.data.response.data.user_by_pk.expenses[1].created_at
                              ).toLocaleDateString()
                            ],
                            [
                              "経費の説明",
                              $queries.query.data.response.data.user_by_pk
                                .expenses[1].detail.description
                            ],
                            [
                              "登録番号",
                              $queries.query.data.response.data.user_by_pk
                                .expenses[1].detail.issuerRegId || "未記入"
                            ],
                            [
                              "領収書",
                              `<img src="data:image/png;base64,${$queries.query.data.response.data.user_by_pk.expenses[1].attachments[0].contents}" alt="領収書" width="300" height="300">`
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
                          data-plasmic-name={"kvItem"}
                          data-plasmic-override={overrides.kvItem}
                          className={classNames("__wab_instance", sty.kvItem)}
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
                          <div
                            className={projectcss.__wab_expr_html_text}
                            dangerouslySetInnerHTML={{
                              __html: (() => {
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
                              })()
                            }}
                          />
                        </KvItem>
                      );
                    })}
                  </DecoratedSection>
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
  root: ["root", "layout", "freeBox", "decoratedSection", "kvItem"],
  layout: ["layout", "freeBox", "decoratedSection", "kvItem"],
  freeBox: ["freeBox", "decoratedSection", "kvItem"],
  decoratedSection: ["decoratedSection", "kvItem"],
  kvItem: ["kvItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  freeBox: "div";
  decoratedSection: typeof DecoratedSection;
  kvItem: typeof KvItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHistoryDetail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHistoryDetail__VariantsArgs;
    args?: PlasmicHistoryDetail__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHistoryDetail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHistoryDetail__ArgsType,
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
          internalArgPropNames: PlasmicHistoryDetail__ArgProps,
          internalVariantPropNames: PlasmicHistoryDetail__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHistoryDetail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHistoryDetail";
  } else {
    func.displayName = `PlasmicHistoryDetail.${nodeName}`;
  }
  return func;
}

export const PlasmicHistoryDetail = Object.assign(
  // Top-level PlasmicHistoryDetail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    freeBox: makeNodeComponent("freeBox"),
    decoratedSection: makeNodeComponent("decoratedSection"),
    kvItem: makeNodeComponent("kvItem"),

    // Metadata about props expected for PlasmicHistoryDetail
    internalVariantProps: PlasmicHistoryDetail__VariantProps,
    internalArgProps: PlasmicHistoryDetail__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHistoryDetail;
/* prettier-ignore-end */
