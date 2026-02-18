import React from "react";
import Icons from "../../Others/IconProvider";

const { FaTrophy } = Icons;

function ProjectCard({ project }) {
  const {
    title,
    description,
    tech,
    highlights,
    demo,
    github,
    category,
    achievements,
  } = project;

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <span className={`category ${category.toLowerCase()}`}>{category}</span>
      </div>

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
            Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
