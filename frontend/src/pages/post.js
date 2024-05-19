import React from 'react';
import '../styles/Post.css'
import { Link } from 'react-router-dom';
import '../styles/MediaQueries.css';
import { Grid } from '@mui/material'

// const Post = ({ id, title, summary, author }) => {
//     return (
//         <div className="post">       
//             <h2 className="card-title">{title}</h2>
//             <p className="post-p">{summary}</p>
//             <p className="post-p">Por {author}</p>
//             <Link to={`/post/${id}`} className='button'>Leia mais</Link>
//         </div>
//     );
// };

const Post = ({ posts }) => {
    return (
      // <div className='post-section'>
      <Grid container md={12} 
      rowSpacing={1}>
        {posts.map(post => (
        <Grid item
        xs={12} 
        sm={6}
        md={4}
        lg={3}>
          <div className='post' key={post.id}>
                <h2 className="card-title">{post.titulo}</h2>
                <p className="post-p">{post.resumo}</p>
                <p className="post-p">Por {post.autor}</p>
                <Link to={`/post/${post.id}`} className='button'>Leia mais</Link>
          </div>
        </Grid>    
          ))}
      </Grid>
      // // </div>
    );
  }

export default Post;
