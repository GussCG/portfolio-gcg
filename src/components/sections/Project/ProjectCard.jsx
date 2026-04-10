import React from "react";
import { useTranslation } from "react-i18next";
import Icons from "../../Others/IconProvider";

const { FaTrophy, FaGithub, FaYoutube, FaMousePointer } = Icons;

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const {
    title,
    status,
    statusType,
    role,
    description,
    tech,
    highlights,
    demo,
    github,
    demoVideo,
    category,
    achievements,
    icon,
  } = project;

  return (
    <div className="project-card">
      <div className="project-header">
        <div className="title-group">
          <div className="title-w-icon">
            {icon && (
              <span className="project-icon">
                {Icons[icon] ? React.createElement(Icons[icon]) : null}
              </span>
            )}
            <h3>{title}</h3>
          </div>

          {status && (
            <span
              className={`status ${statusType === "deployed" ? "deployed" : ""}`}
            >
              {status}
            </span>
          )}
        </div>
        <span className={`category ${category.toLowerCase()}`}>{category}</span>
      </div>

      {role && <p className="role">{role}</p>}

      <div className="tech-stack">
        {tech.map((item, index) => {
          const Icon = Icons[item] || null;
          const isImage = typeof Icon === "string"; // Verifica si es una ruta

          return (
            <span key={index} className="tech-badge" title={item}>
              {Icon &&
                (isImage ? (
                  <img src={Icon} alt={item} className="tech-icon" />
                ) : (
                  <Icon className="tech-icon" />
                ))}
            </span>
          );
        })}
      </div>
      <p className="description">{description}</p>

      <ul className="highlights">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {achievements && (
        <div className="achievements">
          {achievements.map((a, i) => (
            <div key={i} className="achievement">
              <FaTrophy className="trophy-icon" />
              <p key={i}>{a}</p>
            </div>
          ))}
        </div>
      )}

      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            <FaMousePointer className="demo-icon" />{" "}
            {t("projects.actions.viewDemo")}
          </a>
        )}
        {github &&
          (Array.isArray(github) ? (
            github.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                title={repo.label}
              >
                <FaGithub className="github-icon" /> {repo.version}
              </a>
            ))
          ) : (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className="github-icon" />{" "}
              {t("projects.actions.viewCode")}
            </a>
          ))}
        {demoVideo && (
          <a href={demoVideo} target="_blank" rel="noreferrer">
            <FaYoutube className="youtube-icon" />{" "}
            {t("projects.actions.viewVideo")}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
