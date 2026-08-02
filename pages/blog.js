import React from "react";
import Nav from "../src/components/Nav";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <>
      <Nav />
      <div className="page">
        <h1>Test for local123</h1>
        <h1>Test for newLocal</h1>
        <h1>{t("blog.why_developer_tooling_is_the_best_bet_in")}</h1>
        <p className="blog-meta">{t("blog.published_july_2026_6_min_read")}</p>

        <div className="blog-body">
          <p>{t("blog.the_saas_landscape_has_shifted_five_year")}</p>

          <h2>{t("blog.the_new_leverage_layer")}</h2>
          <p>{t("blog.developer_tooling_is_different_when_you_")}</p>
          <p>{t("blog.the_best_developer_tools_share_a_common_")}</p>

          <h2>{t("blog.ai_changed_the_equation")}</h2>
          <p>{t("blog.for_the_past_two_years_the_most_interest")}</p>
          <p>{t("blog.localization_is_a_perfect_example_the_ol")}</p>
          <p>{t("blog.this_is_not_about_replacing_jobs_transla")}</p>

          <h2>{t("blog.what_makes_a_developer_tool_defensible")}</h2>
          <p>{t("blog.the_tools_that_last_are_the_ones_that_ge")}</p>
          <p>{t("blog.if_you_are_building_in_this_space_my_adv")}</p>
        </div>
      </div>
    </>
  );
}
