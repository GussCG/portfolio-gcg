function Home() {
  return (
    <section className="section home">
      <div className="container">
        <h1>Hola, Soy Gustavo Cerda</h1>
        <h2>FullStack Developer</h2>

        <p>
          Ingeniero en Sistemas Computacionales (en proceso de titulación) de la{" "}
          <strong>ESCOM-IPN</strong> enfocado en el desarrollo de aplicaciones
          web funcionales y escalables. Me especializo en cubrir todo el ciclo
          de vida de un proyecto, desde el análisis y diseño UX/UI hasta la
          implementación de APIs robustas y bases de datos. Mi objetivo es
          transformar ideas complejas en soluciones técnicas eficientes.
        </p>

        <div className="quick-stats">
          <div className="stat">
            <strong className="number">+5</strong>{" "}
            <span className="label">años de formación técnica</span>
          </div>
          <div className="stat">
            <strong className="number">10/10</strong>
            <span className="label">calificación del Trabajo Terminal</span>
          </div>
          <div className="stat">
            <strong className="number">FullStack</strong>
            <span className="label">JS, React, Node.js, SQL y más</span>
          </div>
        </div>

        <div className="buttons">
          <a href="/projects" className="btn primary">
            Ver Proyectos
          </a>
          <a
            href="/Gustavo_Cerda_CV_2026.pdf"
            className="btn secondary"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
