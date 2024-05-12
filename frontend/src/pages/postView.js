import React from 'react';
import '../styles/Post.css'
import '../styles/PostView.css'

import { useParams } from 'react-router-dom';

const PostView = ({ posts }) => {
    const { postId } = useParams();
    const postIdString = String(postId); 

    const post = posts.find(post => post.id === postIdString);


    if (!post) {
        return <div>Postagem não encontrada <p></p></div>;
    }

    return (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>Por <strong>{post.author}</strong></p>
            <p>{post.summary}</p>
            <p>{post.content}</p>
        </div>
    );

}

export default PostView;
