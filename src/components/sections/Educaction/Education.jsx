import React from "react";
import { useTranslation } from "react-i18next";
import EducationCard from "./EducationCard";

function Education() {
  const { t } = useTranslation();
  const education = t("education.items", { returnObjects: true });

  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="education-header">
          <h1>{t("education.title")}</h1>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <EducationCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
