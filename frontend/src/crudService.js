import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/listar`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the posts!", error);
        throw error;
    }
};

export const criarPost = async (post) => {
    try {
        const response = await axios.post(`${API_URL}/criar-post`, post);
        return response.data;
    } catch (error) {
        console.error("Erro durante a criação de post:", error);
        throw error;
    }
};