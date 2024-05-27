import React from 'react';
import '../styles/Post.css'
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material'

const Post = ({ posts }) => {
    return (
      <Grid container md={12} 
      >
        {posts.map(post => (
        <Grid item
        xs={12} 
        sm={6}
        md={4}
        lg={3}>
          <div className='post-section'>
          <div className='post' key={post.id}>
                <h2 className="card-title">{post.titulo}</h2>
                <p className="post-p">{post.resumo}</p>
                <p className="post-p">Por {post.autor}</p>
                <Link to={`/post/${post.id}`}>
                  <button className="post-button">Leia mais</button>
                </Link>
          </div>
          </div>
        </Grid>    
          ))}
      </Grid>
    );
  }

export default Post;
