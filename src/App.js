import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import CommentSection from './components/CommentSection';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ArticleList articles={articles} loading={loading} />} />
            <Route path="/article/:id" element={<>
              <Article articles={articles} />
              <CommentSection />
            </>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
