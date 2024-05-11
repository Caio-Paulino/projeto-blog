import React from 'react';
import '../styles/Post.css'
import { Link } from 'react-router-dom';

const Post = ({ id, title, summary, author}) => {
    return (
        <div className="post" id={id}>       
            <h2 className="card-title">{title}</h2>
            <p className="post-p">{summary}</p>
            <p className="post-p">Por {author}</p>
            <Link to={`/post/${id}`} className='button'>Leia mais</Link>
        </div>
    );
};

export default Post;
