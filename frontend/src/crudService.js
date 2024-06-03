import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Microsserviço Publicação

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

export const deletarPost = async (postId) => {
    try {
        const response = await axios.delete(`${API_URL}/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar o post:", error);
        throw error;
    }
};

export const searchPostById = async (postId) => {
    const response = await axios.get(`${API_URL}/post/${postId}`);
    if (!response.ok) {
        throw new Error('Post não encontrado');
    }
    return response.data;
};


// Microsserviço Usuário

export const cadastrarUsuario = async (cadastro) => {
    try {
        const response = await axios.post(`${API_URL}/cadastrar`, cadastro);
        return response.data;
    } catch (error) {
        console.error("Erro durante a criação do cadastro: ", error);
        throw error;
    }
}