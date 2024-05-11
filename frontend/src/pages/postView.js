import React from 'react';
import '../styles/Post.css'
import Post from './post'
// import { Link } from 'react-router-dom';
// import '../data/posts'

const PostView = ({ posts, match }) => {

    const postId = match.params.postId;
    const post = posts.find(post => post.id === postId);

    return (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-meta">
                <span>{post.author}</span>
                <span>{post.summary}</span>
            </div>
        </div>
    );
};

export default PostView;
