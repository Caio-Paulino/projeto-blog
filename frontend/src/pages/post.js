import React, { useState } from 'react';
import '../styles/Post.css';

import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { deletarPost } from '../crudService';

const Post = ({ posts, setPosts }) => {

  const [renderCount, setRenderCount] = useState(0);

  const forceRender = () => {
    setRenderCount(renderCount + 1);
  };

  const handleDelete = async (postId) => {
    try {
      await deletarPost(postId);
      setPosts(posts.filter(post => post.id !== postId));  
      
        
        forceRender();
    } catch (error) {
        console.error("Erro ao deletar o post:", error);
    }
  };

    return (
      <Grid container md={12} 
      >
        {posts.map(post => (
        <Grid item
        key={post.id}
        xs={12} 
        sm={6}
        md={4}
        lg={3}>
          <div className='post-section'>
          <div className='post' key={post.id}>
                <h2 className="card-title">{post.titulo}</h2>
                <p className="post-p">{post.resumo}</p>
                <p className="post-p">Por {post.autor}</p>
                <div class="buttons-area">
                  <Link to={`/post/${post.id}`}>
                    <button className="post-button">Leia mais</button>
                  </Link>
                  <button className="post-button" id="button-deletar" onClick={() => handleDelete(post.id)}>Deletar</button>
                </div>
          </div>
          </div>
        </Grid>    
          ))}
      </Grid>
    );
  }

export default Post;
