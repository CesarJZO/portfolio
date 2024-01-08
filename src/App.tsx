import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Form from "./pages/Form";

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

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<Article />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      <BottomBar links={links} />
    </BrowserRouter>
  );
}

export default App;
