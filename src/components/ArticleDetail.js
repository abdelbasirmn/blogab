import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../services/api';
import CommentSection from './CommentSection';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getArticleById(id);
      setArticle(result);
    }
    fetchData();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <CommentSection articleId={id} />
    </div>
  );
}

export default ArticleDetail;
