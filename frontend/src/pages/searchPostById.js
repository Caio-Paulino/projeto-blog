import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import '../styles/searchPostById.css';
import { searchPostById } from '../crudService';

const SearchPostById = (theme) => {
    const [postId, setPostId] = useState('');
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const post = await searchPostById(postId);
            setPost(post);
            setError('');
        } catch (err) {
            setError('Post not found');
            setPost(null);
        }
    };

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center",padding: "25px 50px"}}>
            <TextField sx={{ backgroundColor: theme === 'light' ? '#000' : '#fff'}}
                label="Digite o ID para buscar"
                variant="standard"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
            />
            <button 
            className="post-button"
            id="search-button"
            onClick={handleSearch}>
                Procurar
            </button>
            </Box>
            {error && <Typography color="error">{error}</Typography>}
            {post && (
                <div className="post-details">
                <h2>{post.titulo}</h2>
                <p>Por <strong>{post.autor}</strong></p>
                <p>{post.resumo}</p>
                <p>{post.postagem}</p>
                </div>
            )}
            
        </div>
        
    );
};

export default SearchPostById;