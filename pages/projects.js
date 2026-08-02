import React from "react";
import Nav from "../src/components/Nav";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    name: "git-localize-bot",
    status: "Active",
    description:
      "A Git-native localization bot that automatically scans React codebases for hardcoded strings on pull requests, injects i18n calls, and AI-translates them. No workflow changes required for developers.",
    tags: ["Node.js", "OpenAI", "AST", "GitHub"],
    url: "https://github.com/yasinfarmani/git-localize-bot",
  },
  {
    name: "querycraft",
    status: "Open Source",
    description:
      "A natural language to SQL query engine powered by large language models. Lets non-technical users query any PostgreSQL database using plain English. Handles joins, aggregations, and subqueries.",
    tags: ["Python", "PostgreSQL", "LLMs", "FastAPI"],
    url: "https://github.com/yasinfarmani/querycraft",
  },
  {
    name: "driftlog",
    status: "Side Project",
    description:
      "A journaling app that uses AI to detect emotional patterns over time and surface weekly insights. Built with Next.js and uses OpenAI embeddings to cluster related entries without storing raw text.",
    tags: ["Next.js", "OpenAI", "Supabase"],
    url: "https://driftlog.app",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Nav />
      <div className="page">
        <h1>{t("projects.projects")}</h1>
        <p className="subtitle">
          {t("projects.things_i_have_built_or_am_actively_worki")}
        </p>

        {PROJECTS.map((p) => (
          <div className="card" key={p.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <h3>{p.name}</h3>
              <span className="tag">{p.status}</span>
            </div>
            <p>{p.description}</p>
            <div>
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 12,
                color: "#2563eb",
                fontSize: 14,
              }}
            >
              {t("projects.view_project")}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
