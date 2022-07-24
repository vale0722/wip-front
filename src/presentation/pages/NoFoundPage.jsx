import React from 'react';
import Header from 'presentation/components/atoms/Header';
import config from 'domain/config';

export default function NoFoundPage() {
  return (
    <div className='flex flex-col h-full w-full'>
      <Header height='h-32' />
      <div
        className='
    flex
    items-center
    justify-center
    w-full h-full
  '
      >
        <div className='px-40 py-20 card w-full mx-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-primary-300 text-9xl'>404</h1>

            <h6 className='mb-2 text-2xl font-bold text-center md:text-3xl'>
              <span className='text-red-500'>Oops!</span> La pagina no fue
              encontrada
            </h6>

            <p className='mb-8 text-center md:text-lg'>
              Puede que la pagina a la que estás intentado acceder no exista o
              esté en proceso de construcción
            </p>

            <a
              href={config.routes.auth.dashboard.path}
              className='btn btn-primary'
            >
              Ir al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
