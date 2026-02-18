import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/app.scss";
import Home from "./components/sections/Home/Home";
import Projects from "./components/sections/Project/Projects";
import Skills from "./components/sections/Skills/Skills";
import Education from "./components/sections/Educaction/Education";
import Contact from "./components/sections/Contact/Contact";
import About from "./components/sections/About/About";

function App() {
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
