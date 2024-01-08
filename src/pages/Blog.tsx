import { Link } from "react-router-dom";

import "./Blog.css";
import axios from "axios";
import { articleApiUrl, articleUrl } from "../utils/endpoints";
import { useEffect, useState } from "react";

const Blog = () => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    axios
      .get(articleUrl)
      .then((res) => {
        const paths = res.data;
        setPaths(paths);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {paths.map((path) => {
          return (
            <li key={path}>
              <Link to={path}>{path}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Blog;
