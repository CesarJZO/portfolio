import { Link } from "react-router-dom";

import "./Blog.css";

const Blog = () => {
  return (
    <main>
      <h1>Blog</h1>

      <ul>
        <li>
          <Link to="/blog/article-1">Article 1</Link>
        </li>
        <li>
          <Link to="/blog/article-2">Article 2</Link>
        </li>
        <li>
          <Link to="/blog/article-3">Article 3</Link>
        </li>
      </ul>
    </main>
  );
};

export default Blog;
