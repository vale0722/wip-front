import React from 'react';
import Header from 'presentation/components/atoms/Header';
import TeacherUpdateForm from 'presentation/components/molecules/TeacherUpdateForm';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function TeacherUpdatePage({ setIsLoading }) {
  return (
    <div className='flex flex-col w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <div className='flex gap-3 text-sm'>
          <Link to={`${config.routes.auth.teachers.path}`}>Profesores</Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${config.routes.teachers.store.path}`}
            className='font-semibold'
          >
            Actualizar
          </Link>
        </div>
        <span className='text-2xl font-semibold py-6'>
          Actualice un profesor
        </span>
        <TeacherUpdateForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
