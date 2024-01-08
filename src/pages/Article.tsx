import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MarkdownArticle from "../components/MarkdownArticle";

import { articleUrl } from "../utils/endpoints";

const Article = () => {
  const [content, setContent] = useState("");
  const { title } = useParams();

  useEffect(() => {
    // fetch(`${articleUrl}/${title}`)
    fetch("https://raw.githubusercontent.com/CesarJZO/C/main/readme.md")
      .then((res) => res.text())
      .then((data) => setContent(data));
  }, [])

  return (
    <main>
      <MarkdownArticle>{content}</MarkdownArticle>
    </main>
  );
};

export default Article;
