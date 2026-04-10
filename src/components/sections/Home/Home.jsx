<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
import { Link } from "react-router-dom";
>>>>>>> a282a4db78550248e81b299a5f7b26dc4a6a7688

function Home() {
  const { t } = useTranslation();
  const stats = t("home.stats", { returnObjects: true });

  return (
    <section className="section home">
      <div className="container">
        <h1>{t("home.title")}</h1>
        <h2>{t("home.subtitle")}</h2>

        <p>{t("home.description")}</p>

        <div className="quick-stats">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <strong className="number">{stat.number}</strong>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="buttons">
<<<<<<< HEAD
          <a href="/projects" className="btn primary">
            {t("home.actions.projects")}
          </a>
=======
          <Link to="/projects" className="btn primary">
            Ver Proyectos
          </Link>
>>>>>>> a282a4db78550248e81b299a5f7b26dc4a6a7688
          <a
            href="/Gustavo_Cerda_CV_2026.pdf"
            className="btn secondary"
            download
          >
            {t("home.actions.downloadCv")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
