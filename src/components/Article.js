import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
