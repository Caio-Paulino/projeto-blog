import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Login from './components/login';
import PostForm from './pages/postForm.js';
import PostView from './pages/postView.js';
import Post from './pages/post.js';

import { Route, Routes } from 'react-router-dom';
import { getPosts } from './crudService.js';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    fetchPosts();
  }, []);

  const [theme, setTheme] = useState("light");

  return (
    <body className={`body ${theme}`}>
      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Post posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostForm posts={posts} />} />
          <Route path="/post/:postId" element={<PostView posts={posts} />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
