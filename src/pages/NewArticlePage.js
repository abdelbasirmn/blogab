import React, { useState } from 'react';
import { createArticle } from '../services/api';

function NewArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createArticle({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>New Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}

export default NewArticlePage;
