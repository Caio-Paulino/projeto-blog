import { useEffect, useState } from 'react';
import './App.css';
import './styles/MediaQueries.css';

// import PostSection from './pages/postSection';
import posts from './data/posts';
import Navbar from './components/navbar';
import Login from './components/login'
import PostForm from './pages/postForm.js'
import PostView from './pages/postView.js'
import Post from './pages/post.js'

import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/listar")
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the posts!", error);
    });
}, []); 

  const [theme, setTheme] = useState("light")
  
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      {/* <p>{JSON.stringify(posts)}</p> */}
      <Routes>
        <Route path="/" element={<Post posts={posts}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostForm posts={posts}/>} />
        <Route path="/post/:postId" element={<PostView posts={posts}/>} />  
      </Routes>
    </div>
  );
}

export default App;
