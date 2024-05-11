import React from 'react';
import Post from './post'
import '../styles/Post.css'

const PostSection = ({ posts }) => {
    return (
        <div className="post-section">
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </div>
    );
};

export default PostSection;
