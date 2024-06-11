import React, { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="comment-section">
      <h3>Commentaires</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={handleCommentChange} />
        <button type="submit">Ajouter un commentaire</button>
      </form>
    </div>
  );
};

export default CommentSection;
