import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    console.log('LoginPage - user:', user);
    if (user) navigate('/');
  }, [user]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login({ login: email, password });
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className='pt-16'>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="login">Email:</label>
          <input
            type="text"
            id="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
