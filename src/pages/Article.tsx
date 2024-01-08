import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MarkdownArticle from "../components/MarkdownArticle";

import { articleUrl } from "../utils/endpoints";
import axios from "axios";

const Article = () => {
  const [content, setContent] = useState("");
  const { title } = useParams();

  useEffect(() => {
    axios
      .get(`${articleUrl}/${title}`)
      .then((res) => {
        setContent(res.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <MarkdownArticle>{content}</MarkdownArticle>
    </main>
  );
};

export default Article;
