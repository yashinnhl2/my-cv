import React from "react";
import Nav from "../src/components/Nav";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Nav />
      <div className="page">
        <h1>{t("index.yasin_farmani")}</h1>
        <p className="subtitle">
          {t("index.senior_software_engineer_vancouver_canad")}
        </p>

        <h2>{t("index.about_me")}</h2>
        <p>{t("index.i_am_a_software_engineer_with_over_eight")}</p>
        <p>{t("index.my_work_spans_fullstack_development_clou")}</p>
        <p>{t("index.outside_of_work_i_contribute_to_opensour")}</p>

        <h2>{t("index.skills")}</h2>
        <div>
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "AWS",
            "Docker",
            "GraphQL",
            "Python",
            "Rust",
          ].map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>

        <h2>{t("index.experience")}</h2>

        <div className="experience-item">
          <div className="role">{t("index.staff_engineer")}</div>
          <div className="company">{t("index.replit")}</div>
          <div className="period">{t("index.2022_present")}</div>
          <p>{t("index.leading_the_developer_experience_platfor")}</p>
        </div>

        <div className="experience-item">
          <div className="role">{t("index.senior_software_engineer")}</div>
          <div className="company">{t("index.shopify")}</div>
          <div className="period">{t("index.2019_2022")}</div>
          <p>{t("index.built_and_maintained_the_checkout_locali")}</p>
        </div>

        <div className="experience-item">
          <div className="role">{t("index.software_engineer")}</div>
          <div className="company">{t("index.hootsuite")}</div>
          <div className="period">{t("index.2016_2019")}</div>
          <p>{t("index.worked_on_the_social_media_analytics_das")}</p>
        </div>

        <h2>{t("index.education")}</h2>
        <div className="card">
          <div className="role">
            {t("index.bachelor_of_science_in_computer_science")}
          </div>
          <div className="company">
            {t("index.university_of_british_columbia")}
          </div>
          <div className="period">{t("index.graduated_2016")}</div>
        </div>
      </div>
    </>
  );
}
