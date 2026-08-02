import React, { useState } from "react";
import Nav from "../src/components/Nav";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Nav />
      <div className="page">
        <h1>{t("contact.get_in_touch")}</h1>
        <p className="subtitle">
          {t("contact.open_to_interesting_projects_speaking_in")}
        </p>
        <p>{t("contact.you_can_find_me_on_github_linkedin_and_o")}</p>

        {sent ? (
          <div className="card">
            <p>{t("contact.thanks_for_reaching_out_i_will_get_back_")}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">{t("contact.your_name")}</label>
            <input
              id="name"
              type="text"
              placeholder={t("contact.jane_smith")}
              required
            />

            <label htmlFor="email">{t("contact.email_address")}</label>
            <input
              id="email"
              type="email"
              placeholder={t("contact.janeexamplecom")}
              required
            />

            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              id="message"
              placeholder={t("contact.tell_me_what_you_are_working_on")}
              required
            />

            <button type="submit" className="btn">
              {t("contact.send_message")}
            </button>
          </form>
        )}

        <h2>{t("contact.other_ways_to_connect")}</h2>
        <p>{t("contact.you_can_find_me_on_github_linkedin_and_o")}</p>
      </div>
    </>
  );
}
