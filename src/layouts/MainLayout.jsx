import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import BGContainer from "../components/Others/BGContainer";

function MainLayout({ children }) {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const routePalettes = {
      "/": {
        accent: "#803300",
        bubbles: ["#803300", "#b44800", "#ff6c0a", "#a45a28", "#522100"],
      },
      "/projects": {
        accent: "#001536",
        bubbles: ["#001536", "#00245e", "#003a94", "#000a1a", "#0047b3"],
      },
      "/skills": {
        accent: "#00270e",
        bubbles: ["#00270e", "#004600", "#006400", "#001205", "#007a00"],
      },
      "/education": {
        accent: "#450000",
        bubbles: ["#450000", "#6b0000", "#900000", "#200000", "#c00000"],
      },
      "/about": {
        accent: "#461c6e",
        bubbles: ["#461c6e", "#270051", "#6a1b9a", "#1a0033", "#8e24aa"],
      },
      "/contact": {
        accent: "#a07600",
        bubbles: ["#a07600", "#d4a017", "#ffc107", "#5c4300", "#ffb300"],
      },
    };

    const palette = routePalettes[location.pathname] || routePalettes["/"];

    document.documentElement.style.setProperty(
      "--accent-color",
      palette.accent,
    );

    palette.bubbles.forEach((color, index) => {
      document.documentElement.style.setProperty(
        `--bubble-${index + 1}`,
        color,
      );
    });

    const bgColor = theme === "dark" ? "#0a0a0a" : "#f5f5f5";
    const blendMode = theme === "dark" ? "screen" : "multiply";
    document.documentElement.style.setProperty("--bg-main", bgColor);
    document.documentElement.style.setProperty("--blend-mode", blendMode);
  }, [location.pathname, theme]);

  return (
    <BGContainer>
      <div className="app-layout">
        <Sidebar />
        <main className="app-content">{children}</main>
      </div>
    </BGContainer>
  );
}

export default MainLayout;
