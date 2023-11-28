import React from 'react'
import { useState } from 'react';
import { useAuth } from '../AuthProvider/AuthContext';

export const Register = () => {
  // Estados locais para controlar os campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Obtém a função de registro do hook de autenticação
  const { register } = useAuth();

  // Função chamada ao enviar o formulário
  const handleRegister = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    try {
      setName(''); // Limpa o estado do nome
      setEmail(''); // Limpa o estado do e-mail
      setPassword(''); // Limpa o estado da senha

      // Chama a função de registro passando nome, e-mail e senha
      register(name, email, password);

      window.location.href = '/'; // Redireciona o usuário para a página inicial

    } catch (error) {
      console.log('errr', error);
      setErrMsg(error.response.data.message); // Configura a mensagem de erro (não está definido no código)
      alert(error.response.data.message); // Exibe um alerta com a mensagem de erro
    }
  };

  // Renderiza o componente
  return (
    <div>
      {/* Formulário de Registro */}
      <form onSubmit={handleRegister}>
        <h2>Register</h2>

        {/* Campo de Nome */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Campo de E-mail */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Campo de Senha */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Botão de Registro */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};


export default Register