import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/App.scss";
import Home from "./components/sections/Home/Home";
import Projects from "./components/sections/Project/Projects";
import Skills from "./components/sections/Skills/Skills";
import Education from "./components/sections/Educaction/Education";
import Contact from "./components/sections/Contact/Contact";
import About from "./components/sections/About/About";

function App() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 320);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-warning">
        <h1>{t("mobileWarning.title")}</h1>
        <p>{t("mobileWarning.description")}</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
