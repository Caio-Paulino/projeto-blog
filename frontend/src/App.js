import { useState } from 'react';
import './App.css';

import PostSection from './pages/postSection';
import posts from './data/posts';
import Navbar from './components/navbar';
import Login from './components/login'
import PostForm from './pages/postForm.js'
import PostView from './pages/postView.js'

import { Route, Routes } from 'react-router-dom';


function App() {

  const [theme, setTheme] = useState("light")
  
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<PostSection posts={posts}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/post/:postId" element={<PostView posts={posts}/>} />  
      </Routes>
        
    </div>
  );
}

export default App;
