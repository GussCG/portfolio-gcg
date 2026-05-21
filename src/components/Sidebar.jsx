import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import Icons from "./Others/IconProvider";
import homeImg from "../assets/me/homeImg.webp";
import projectsImg from "../assets/me/projectsImg.webp";
import skillsImg from "../assets/me/skillsImg.webp";
import educationImg from "../assets/me/educationImg.webp";
import aboutImg from "../assets/me/aboutImg.webp";
import contactImg from "../assets/me/contactImg.webp";

const {
  FaGithub,
  FaLinkedin,
  FaUserCircle,
  IoHome,
  FaRocket,
  FaCircleInfo,
  LuCpu,
  IoSchool,
  IoMail,
  MdLightMode,
  MdNightlightRound,
} = Icons;

function Sidebar() {
  const location = useLocation();
  const { toggleTheme, theme } = useTheme();
  const { t, i18n } = useTranslation();

  const [isLoaded, setIsLoaded] = useState(false);

  const routeImgs = {
    "/": homeImg,
    "/projects": projectsImg,
    "/skills": skillsImg,
    "/education": educationImg,
    "/about": aboutImg,
    "/contact": contactImg,
  };

  const profileImg = routeImgs[location.pathname] || homeImg;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setIsLoaded(false);
  }, [location.pathname]);

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="header-top">
          <div className="lang-switch">
            <span className="lang-label">ES</span>

            <label className="switch">
              <input
                type="checkbox"
                checked={i18n.resolvedLanguage === "en"}
                onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")}
              />
              <span className="slider"></span>
            </label>

            <span className="lang-label">EN</span>
          </div>

          {/* <div className="lang-switch" aria-label={t("ui.lang")}>
            <button
              className={i18n.resolvedLanguage === "es" ? "active" : ""}
              onClick={() => changeLanguage("es")}
              type="button"
            >
              {t("ui.spanish")}
            </button>
            <button
              className={i18n.resolvedLanguage === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
              type="button"
            >
              {t("ui.english")}
            </button>
          </div> */}
          <button className="toggle-theme-button" onClick={toggleTheme}>
            {theme === "light" ? <MdNightlightRound /> : <MdLightMode />}
          </button>
        </div>
        <div className="profile-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={location.pathname}
              src={profileImg}
              onLoad={() => setIsLoaded(true)}
              decoding="async"
              alt="Gustavo Cerda García"
              className="profile-image"
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(8px) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              animate={{
                y: isLoaded ? 0 : 40,
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded
                  ? "blur(0px) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))"
                  : "blur(8px) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(8px) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <h2 className="profile-name">Gustavo Cerda García</h2>
        <p className="profile-role">{t("sidebar.profileRole")}</p>
      </div>

      <nav className="sidebar__nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <IoHome className="nav-icon" />
              <span>{t("sidebar.nav.home")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaRocket className="nav-icon" />
              <span>{t("sidebar.nav.projects")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <LuCpu className="nav-icon" />
              <span>{t("sidebar.nav.skills")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <IoSchool className="nav-icon" />
              <span>{t("sidebar.nav.education")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaCircleInfo className="nav-icon" />
              <span>{t("sidebar.nav.about")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <IoMail className="nav-icon" />
              <span>{t("sidebar.nav.contact")}</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar__footer">
        <a
          href="https://github.com/GussCG"
          target="_blank"
          className="social-link"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gusscg30/"
          target="_blank"
          className="social-link"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
