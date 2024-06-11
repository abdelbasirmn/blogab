import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SortMenu from './SortMenu';

const ArticleList = ({ articles, loading }) => {
  const [sortType, setSortType] = useState('asc');

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const sortedArticles = articles.sort((a, b) => {
    if (sortType === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-list">
      <h2>Liste des Articles</h2>
      <SortMenu onSortChange={handleSortChange} />
      <ul>
        {sortedArticles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
