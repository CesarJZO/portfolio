import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MarkdownArticle from "../components/MarkdownArticle";

import { articleUrl } from "../utils/endpoints";

const Article = () => {
  const [content, setContent] = useState("");
  const { title } = useParams();

  useEffect(() => {
    fetch(`${articleUrl}/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content);
      });
  }, [])

  return (
    <main>
      <MarkdownArticle>{content}</MarkdownArticle>
    </main>
  );
};

export default Article;
