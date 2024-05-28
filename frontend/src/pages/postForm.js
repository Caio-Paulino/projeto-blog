// PostForm.js
import React, { useState } from 'react';
import '../styles/PostForm.css';
import { criarPost } from '../crudService';

function PostForm() {
  const [titulo, setTitle] = useState('');
  const [resumo, setSummary] = useState('');
  const [postagem, setContent] = useState('');
  const [autor, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { titulo, resumo, postagem, autor };
      const response = await criarPost(newPost);
      console.log(response);
      // Redefinir os campos após o envio bem-sucedido do formulário
      setTitle('');
      setContent('');
      setSummary('');
      setAuthor('');
    } catch (error) {
      console.error("Erro durante a criação de post:", error);
    }
  };

//   export const deletarPost = async (id) => {
//     try {
//         const response = await axios.post(`${API_URL}/deletar/${id}`, id);
//         return response.data;
//     } catch (error) {
//         console.error("Erro durante deletar o post:", error);
//         throw error;
//     }
// };

  return (
    <form className="form-post" onSubmit={handleSubmit}>
      <h1>Postar</h1>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          className="input_post"
          value={titulo}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Título da postagem'
          required
        />
      </div>
      <div>
        <label htmlFor="content">Postagem:</label>
        <textarea
          id="content"
          className="input_post"
          value={postagem}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Digite aqui sua postagem para o blog'
          rows={10}
          cols={30}
          required
        />
      </div>
      <div>
        <label htmlFor="summary">Resumo da postagem:</label>
        <textarea
          id="summary"
          className="input_post"
          value={resumo}
          onChange={(e) => setSummary(e.target.value)}
          placeholder='Resuma a ideia da sua postagem'
          maxLength={100}
          rows={5}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          className="input_post"
          value={autor}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Autor da postagem'
          required
        />
      </div>
      <button type="submit" className='form-button'>Publicar</button>
    </form>
  );
}

export default PostForm;
