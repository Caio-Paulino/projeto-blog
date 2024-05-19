import React from 'react';
import '../styles/Post.css'
import '../styles/PostView.css'

import { useParams } from 'react-router-dom';

const PostView = ({ posts }) => {
    const { postId } = useParams();
    const post = posts.find(p => p.id.toString() === postId);
    if (!post) {
        return <div>Postagem não encontrada <p></p></div>;
    }

    return (
        <div className="post-details">
            <h2>{post.titulo}</h2>
            <p>Por <strong>{post.autor}</strong></p>
            <p>{post.resumo}</p>
            <p>{post.postagem}</p>
        </div>
    );

}

export default PostView;
