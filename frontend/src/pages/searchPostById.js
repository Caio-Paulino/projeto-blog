import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import '../styles/searchPostById.css';
import { searchPostById } from '../crudService';

const SearchPostById = (theme) => {
    const [postId, setPostId] = useState('');
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/post/${postId}`);
            setPost(response.data);
            setError('');
        } catch (err) {
            setError('Post not found');
            setPost(null);
        }
    };

    // Manipulador de evento para pressionar a tecla Enter
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "left", padding: "25px 50px"}}>
            <TextField sx={{ backgroundColor: theme === 'light' ? '#000' : '#fff'}}
                label="Digite o ID para buscar"
                variant="standard"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
            />
            <button 
            className="post-button"
            id="search-button"
            onClick={handleSearch}
            onKeyDown={handleKeyPress}>
                Procurar
            </button>
            </Box>
            {error && <Typography color="error">{error}</Typography>}
            {post && (
                <div className='flex'>
                <div className="post-details">
                <h2>{post.titulo}</h2>
                <p>Por <strong>{post.autor}</strong></p>
                <p>{post.resumo}</p>
                <p>{post.postagem}</p>
                </div>
                </div>
            )}
        </div>
    );
};

export default SearchPostById;