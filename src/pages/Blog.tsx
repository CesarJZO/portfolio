import { Link } from "react-router-dom";

import "./Blog.css";
import axios, { AxiosResponse } from "axios";
import { articleUrl } from "../utils/endpoints";
import { useEffect, useState } from "react";

import { articleDto } from "../utils/dtos";

const Blog = () => {
  const [articles, setArticles] = useState<articleDto[]>([]);

  useEffect(() => {
    axios
      .get(articleUrl)
      .then((res: AxiosResponse<articleDto[]>) => {
        const articles = res.data;

        setArticles(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>Blog</h1>
      <Link to="/form">Create Article</Link>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.path}>
              <Link to={article.path}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Blog;
