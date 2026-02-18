import { aboutMe } from "../../../constants/aboutme";
import Icons from "../../Others/IconProvider";

const { FaMapMarkerAlt } = Icons;

function About() {
  const { profile, summary, description, highlights, philosophy } = aboutMe;

  return (
    <section className="section about">
      <div className="container">
        <h1>Sobre mí</h1>

        <div className="about-grid">
          <div className="about-profile">
            <div className="profile-info">
              <div className="item">
                <h2 className="name">{profile.name}</h2>
                <h3 className="role">{profile.role.join(" | ")}</h3>
              </div>
              <div className="item location">
                <FaMapMarkerAlt className="location-icon" />
                <span className="location-text">{profile.location}</span>
              </div>
            </div>
            <span className="motto">{profile.motto}</span>
          </div>

          <div className="about-summary">
            <h2>Resumen</h2>
            <p>{summary}</p>
          </div>

          <div className="about-description">
            <h2>Descripción</h2>
            <ul>
              {description.map((paragraph, index) => (
                <li key={index}>{paragraph}</li>
              ))}
            </ul>
          </div>

          <div className="about-highlights">
            <h2>Logros Destacados</h2>
            <div className="badges-container">
              {highlights.map((highlight, index) => {
                const IconComponent = Icons[highlight.icon];

                return (
                  <div className="badge-circle" key={index}>
                    <div className="icon-wrapper">
                      {IconComponent && (
                        <IconComponent className="highlight-icon" />
                      )}
                    </div>
                    <span className="highlight-label">{highlight.label}</span>
                    <span className="highlight-value">{highlight.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-philosophy">
            <h2>Filosofía de Trabajo</h2>
            <ul>
              {philosophy.map((principle, index) => (
                <li key={index}>
                  <span className="philosophy-point">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
