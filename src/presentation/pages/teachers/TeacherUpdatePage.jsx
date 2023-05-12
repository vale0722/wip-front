import React from 'react';
import Header from 'presentation/components/atoms/Header';
import TeacherUpdateForm from 'presentation/components/molecules/TeacherUpdateForm';
import { Link } from 'react-router-dom';
import config from 'domain/config';

export default function TeacherUpdatePage({ setIsLoading }) {
  return (
    <div className='flex flex-col w-full items-center'>
      <Header height='h-full' />
      <div className='z-8 mx-auto w-full px-8 bg-white sticky top-[65px] py-2'>
        <div className='text-sm breadcrumbs capitalize'>
          <ul>
            <li>
              <Link to={`${config.routes.auth.teachers.path}`}>Profesores</Link>
            </li>
            <li>
              <Link
                to={`${config.routes.teachers.store.path}`}
                className='font-semibold'
              >
                Actualizar
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container flex flex-col h-full w-full my-4'>
        <span className='text-2xl font-semibold py-2 px-8 md:px-0'>
          Actualice un profesor
        </span>
        <TeacherUpdateForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
