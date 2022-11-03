import React from 'react';
import service from 'domain/services';

export default function LoginPage({ setIsLoading }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await service.login.login(setIsLoading, {
      email,
      password,
    });

    if (response.user) {
      sessionStorage.setItem('loggedUser', JSON.stringify(response));
      window.location.reload();
      return;
    }

    alert('error');
  };

  return (
    <div className='min-h-screen bg-primary-300 flex justify-center items-center'>
      <div className='absolute w-60 h-60 rounded-xl bg-primary-200 -top-5 -left-16 z-0 transform rotate-45 hidden md:block' />
      <div className='absolute w-48 h-48 rounded-xl bg-primary-200 -bottom-6 -right-10 transform rotate-12 hidden md:block' />
      <div className='card z-20'>
        <div>
          <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
            Iniciar Sesión
          </h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Sistema de gestión curricular
          </p>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            className='block form-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            className='block form-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='text-center mt-10'>
            <button type='submit' className='py-3 px-4 w-64 btn-primary'>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
      <div className='w-40 h-40 absolute bg-primary-200 rounded-full top-0 right-12 hidden md:block' />
      <div className='w-20 h-40 absolute bg-primary-200 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block' />
    </div>
  );
}
