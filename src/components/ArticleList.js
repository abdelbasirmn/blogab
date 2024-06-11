import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/api';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getArticles();
      setArticles(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
