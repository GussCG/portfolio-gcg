import { useState } from "react";
import { projects } from "../../../constants/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h1>Proyectos Destacados</h1>
          <div className="filters">
            {["All", "Web", "Backend", "Mobile"].map((cat) => (
              <button
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
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
