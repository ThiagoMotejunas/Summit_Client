import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DefaultPage from '../components/DefaultPage';
import LoginTypeTab from '../components/Input/LoginTypeTab';
import FieldInput from '../components/Input/FieldInput';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname || '/';

  const { login, user } = useAuth();

  const [loginType, setLoginType] = useState<number>(0); // 0: student, 1: entreprise

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    console.log('LoginPage - user:', user);
    if (user) navigate('/');
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(from, { replace: true });

    // try {
    //   await login({ login: formData.email, password: formData.password, token: formData.token });
    //   navigate('/');
    // } catch (error) {
    //   console.error('Erro ao fazer login:', error);
    // }
  };

  return (
    <DefaultPage>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='max-w-md w-full'>
          <div className='w-full text-center'>
            <h1 className='text-3xl font-bold'>Entrar na conta</h1>
            <p className='text-lg text-gray-600 mt-2'>Escolha como deseja fazer login</p>
          </div>
          <div className='mt-2 w-full'>
            <LoginTypeTab value={loginType} setValue={setLoginType} />
          </div>
          <div className='mt-8 w-full'>
            <form onSubmit={handleLogin} className={`flex flex-col gap-4 w-full p-8 bg-white shadow-lg shadow-black/50 rounded-lg`}>
              <FieldInput
                label={loginType === 0 ? 'Login' : 'CNPJ'}
                value={username}
                setValue={setUsername}
              />
              <FieldInput
                label='Senha'
                isPassword
                value={password}
                setValue={setPassword}
              />

              {loginType === 1 && (
                <FieldInput
                  label='Token'
                  value={token}
                  setValue={setToken}
                />
              )}

              <div className='flex flex-col items-center w-full'>
                <button type="submit" className="bg-blue-500 text-white py-2 w-full rounded-md mt-4">Entrar</button>
                <Link
                  to={'/'}
                  className='text-center text-blue-500 hover:text-blue-700 mt-2'
                >
                  Continuar sem logar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

export default LoginPage;
