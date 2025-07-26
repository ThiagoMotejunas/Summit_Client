import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import DefaultPage from '../components/DefaultPage';
import LoginTypeTab from '../components/Input/LoginTypeTab';
import FieldInput from '../components/Input/FieldInput';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [loginType, setLoginType] = useState<number>(0); // 0: student, 1: entreprise
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    token: '', // token só será usado se loginType === 1
  });

  useEffect(() => {
    console.log('LoginPage - user:', user);
    if (user) navigate('/');
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   await login({ login: formData.email, password: formData.password, token: formData.token });
    //   navigate('/');
    // } catch (error) {
    //   console.error('Erro ao fazer login:', error);
    // }
  };

  const formClass = 'flex flex-col gap-4 w-full p-8 bg-white shadow-lg shadow-black/50 rounded-lg';

  return (
    <DefaultPage className='overflow-hidden'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='w-lg h-full p-4'>
          <div className='w-full text-center'>
            <h1 className='text-3xl font-bold'>Entrar na conta</h1>
            <p className='text-lg text-gray-600 mt-2'>Escolha como deseja fazer login</p>
          </div>
          <div className='mt-2'>
            <LoginTypeTab value={loginType} setValue={setLoginType} />
          </div>
          <div className='mt-8'>
            <form onSubmit={handleLogin} className={formClass}>
              <FieldInput label={loginType === 0 ? 'Login:' : 'CNPJ:'} />
              <label htmlFor="email">{loginType === 0 ? 'Login:' : 'CNPJ:'}</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              {loginType === 1 && (
                <>
                  <label htmlFor="token">Token:</label>
                  <input
                    type="password"
                    name="token"
                    id="token"
                    value={formData.token}
                    onChange={handleInputChange}
                  />
                </>
              )}

              <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

export default LoginPage;
