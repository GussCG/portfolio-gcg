import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Icons from "./Others/IconProvider";
import homeImg from "../assets/me/homeImg.png";
import projectsImg from "../assets/me/projectsImg.png";
import skillsImg from "../assets/me/skillsImg.png";
import educationImg from "../assets/me/educationImg.png";
import aboutImg from "../assets/me/aboutImg.png";
import contactImg from "../assets/me/contactImg.png";

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

  const routeImgs = {
    "/": homeImg,
    "/projects": projectsImg,
    "/skills": skillsImg,
    "/education": educationImg,
    "/about": aboutImg,
    "/contact": contactImg,
  };

  const profileImg = routeImgs[location.pathname] || homeImg;

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <button className="toggle-theme-button" onClick={toggleTheme}>
          {theme === "light" ? <MdNightlightRound /> : <MdLightMode />}
        </button>
        <div className="profile-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={location.pathname}
              src={profileImg}
              alt="Gustavo Cerda García"
              className="profile-image"
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(8px), drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px), drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(8px), drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <h2 className="profile-name">Gustavo Cerda García</h2>
        <p className="profile-role">FullStack Developer</p>
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
              <span>Inicio</span>
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
              <span>Proyectos</span>
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
              <span>Habilidades</span>
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
              <span>Educación</span>
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
              <span>Sobre mí</span>
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
              <span>Contacto</span>
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
