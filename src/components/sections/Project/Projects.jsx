import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.cards", { returnObjects: true });
  const filters = t("projects.filters", { returnObjects: true });

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h1>{t("projects.title")}</h1>
          <div className="filters">
            {filters.map((cat) => (
              <button
                key={cat.key}
                className={filter === cat.key ? "active" : ""}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
