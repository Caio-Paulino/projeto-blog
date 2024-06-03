import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Login from './pages/login.js';
import PostForm from './pages/postForm.js';
import PostView from './pages/postView.js';
import Post from './pages/post.js';

import { Route, Routes } from 'react-router-dom';
import { getPosts } from './crudService.js';
import Cadastro from './pages/cadastro.js';
import SearchPostById from './pages/searchPostById.js';

function App() {
  const [posts, setPosts] = useState([]);

  // puxa os posts do endpoint listar
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

  // recarrega página
  function refresh() {
    window.location.reload();
  }

  // adiciona a nova postagem recebida do form
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setTimeout(refresh, 2500);  
  };


  // define tema da página
  const [theme, setTheme] = useState("light");

  return (
    <body className={`body ${theme}`}>
      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/home" element={<Post posts={posts} setPosts={setPosts}/>} />
          <Route path="/post" element={<PostForm addPost={addPost} />} />
          <Route path="/post/:postId" element={<PostView posts={posts} />} />
          <Route path="/search" element={<SearchPostById />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;