import React, { useState } from 'react';
import '../styles/PostForm.css';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do post, como enviar para um servidor ou armazenar localmente.
    console.log({ title, content, summary, author });
    // Você também pode redefinir os campos após o envio do formulário, se desejar.
    setTitle('');
    setContent('');
    setSummary('');
    setAuthor('');
  };

  return (
    <form class="form-post" onSubmit={handleSubmit}>
      <h1>Postar</h1>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          className="input_post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Título da postagem'
          required
        />
      </div>
      <div>
        <label htmlFor="content">Postagem:</label>
        <textarea
          id="content"
          value={content}
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
          value={summary}
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
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Autor da postagem'
          required
        />
      </div>
      <button type="submit">Publicar</button>
    </form>
  );
}

export default PostForm;