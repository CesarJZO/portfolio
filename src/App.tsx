import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

import Landing from "./pages/Landing";
import Blog from "./pages/Blog";

const socialLinks = [
  {
    site: "GitHub",
    icon: "/logos/logo-github.svg",
    link: "https://github.com/CesarJZO",
  },
  {
    site: "LinkedIn",
    icon: "/logos/logo-linkedin.svg",
    link: "https://www.linkedin.com/in/cesarjzo/",
  },
  {
    site: "Twitter",
    icon: "/logos/logo-twitter.svg",
    link: "https://twitter.com/CesarJZO",
  },
];

const links = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Courses", path: "/courses" },
];

function App() {
  return (
    <BrowserRouter>
      <TopBar socialLinks={socialLinks} />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <BottomBar links={links} />
    </BrowserRouter>
  );
}

export default App;
