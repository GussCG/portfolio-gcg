import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function MainLayout({ children }) {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const routeColors = {
      "/": {
        light: "#7b3300",
        dark: "#803300",
      },
      "/projects": {
        light: "#00245e",
        dark: "#001536",
      },
      "/skills": {
        light: "#004600",
        dark: "#00270e",
      },
      "/education": {
        light: "#500000",
        dark: "#450000",
      },
      "/about": {
        light: "#270051",
        dark: "#461c6e",
      },
      "/contact": {
        light: "#987900",
        dark: "#a07600",
      },
    };

    const route = routeColors[location.pathname] || routeColors["/"];

    const newColor = route[theme];

    document.documentElement.style.setProperty("--accent-color", newColor);
  }, [location.pathname, theme]);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">{children}</main>
    </div>
  );
}

export default MainLayout;
