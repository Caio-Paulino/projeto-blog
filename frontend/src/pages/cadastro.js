import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "../styles/styleLogin.css";
import '../styles/Post.css';
import { cadastrarUsuario } from '../crudService';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Importando o hook useNavigate

    const handleCadastrar = async (e) => {
        e.preventDefault();
        try {
          const novoCadastro = { username, password };
          const response = await cadastrarUsuario(novoCadastro);
          console.log(response);
          // Redefinir os campos após o envio bem-sucedido do formulário
          setUsername('');
          setPassword('');
          window.alert("Cadastrado com sucesso!");
          navigate('/login'); // Redirecionar para a página de login
          
        } catch (error) {
          console.error("Erro durante cadastro:", error);
          setErrorMessage("Erro durante o cadastro. Usuário já existe."); // Adiciona uma mensagem de erro se ocorrer um erro
        }
      };

    return (
        <div className='wrapper'>
            <section className='login'>
                <form onSubmit={handleCadastrar}>
                    <h1>Cadastrar</h1>
                    <div className="inputbox">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputbox">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <button type="submit" className='form-button'>Cadastrar</button>
                    <Link to="/login"><p className='link-login'>Já tem uma conta? Faça Login</p></Link>
                </form>
            </section>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
}

export default Cadastro;
