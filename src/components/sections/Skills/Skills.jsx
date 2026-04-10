import React from "react";
import { useTranslation } from "react-i18next";
import Icons from "../../Others/IconProvider";

function Skills() {
  const { t } = useTranslation();
  const skills = t("skills.groups", { returnObjects: true });

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h1>{t("skills.title")}</h1>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{group.category}</h3>
              </div>

              <div className="skills-list">
                {group.items.map((item, i) => {
                  const Icon = Icons[item];

                  return (
                    <span
                      key={i}
                      className={`skill-item ${!group.useIcons && "no-icon"}`}
                    >
                      {group.useIcons && Icon && (
                        <Icon className="skill-icon" />
                      )}

                      <span className="skill-name">{item}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
