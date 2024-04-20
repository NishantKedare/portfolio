import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />}>
          <Route index element={<AboutMe />} />
        </Route>
        <Route path="/resume" element={<Resume />}>
          <Route index element={<Resume />} />
        </Route>
        <Route path="/projects" element={<Project />}>
          <Route index element={<Project />} />
        </Route>
        <Route path="/contact" element={<Contact />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
