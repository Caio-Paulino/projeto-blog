import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/styleLogin.css";
import '../styles/Post.css';
import { getPosts } from '../crudService';
import Post from './post';
import { Route, Routes } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [estaLogado, addLogado] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const r = await axios.post('http://localhost:8080/logar', {
                username,
                password
            });
            alert(r.data); // Exibe a mensagem de sucesso em um alerta
            addLogado(true); // Define estaLogado como true após o login bem-sucedido
        } catch (error) {
            if (error.r) {
                setErrorMessage(error.r.data);
            } else {
                setErrorMessage('Usuário ou senha incorretos.');
            }
        }
    };

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        // posts.filter(posts.titulo === "teste título")
        setPosts(data);
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    fetchPosts();
  }, []);
    

    return (
        //Com sucesso, redireciona para a página Home
        <div className='wrapper'>
            {estaLogado ? (
                
        <div className="App">
            <Routes>
              <Route path="/" element={<Post posts={posts} />} />
            </Routes>
        </div>
        
            ) : (
            <body>
                {/* Sessão do forms, para o envio dos dados do usuário */}
                <section className='login'>
                    <form onSubmit={handleLogin}>
            
                        <h1>Login</h1>
                        <div class="inputbox">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <label for="email">Email</label>
                        </div>
                        <div class="inputbox">
                            <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label for="password">Senha</label>
                        </div>
                        <button type="submit" className='form-button'>Entrar</button>
                    </form>
                </section>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </body>
        )}
        </div>
    );
}

export default Login;