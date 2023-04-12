import React, { useEffect, useState } from 'react';
import Header from 'presentation/components/atoms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getTeachers } from 'domain/reducers/teacher.reducer';
import services from 'domain/services';

export default function Teachers({ setIsLoading }) {
  const getShowRoute = (id) =>
    config.routes.teachers.show.path.replace(':teacher', id);

  const teachers = useSelector((state) => state.teachers);
  const [alertItem, setAlertItem] = useState(false);

  const getCreateRoute = () => config.routes.teachers.store.path;
  const deleteTeacher = async (id) => {
    setIsLoading(true);
    const response = await services.teachers.remove(setIsLoading, id);
    if (response.status === 'OK') {
      setAlertItem(true);
      store.dispatch(getTeachers(setIsLoading));
      setTimeout(() => {
        setAlertItem(false);
      }, 5000);
      return;
    }

    alert('ha ocurrido un error');
  };

  useEffect(() => {
    store.dispatch(getTeachers(setIsLoading));
  }, []);

  return (
    <div className='flex flex-col h-full w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        {alertItem ? (
          <div
            className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md'
            role='alert'
          >
            <div className='flex'>
              <div className='py-1'>
                <svg
                  className='fill-current h-6 w-6 text-teal-500 mr-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
                </svg>
              </div>
              <div>
                <p className='font-bold'>Accíon realizada con exito</p>
                <p className='text-sm'>Registro eliminado exitosamente</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <span className='text-2xl font-semibold py-6'>Profesores</span>
        <div className='mb-4 flex justify-between items-center'>
          <div className='flex-1 pr-4'>
            <div className='relative md:w-1/3'>
              <input
                type='search'
                className='w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-300 bg-primary-50 font-medium'
                placeholder='Buscar'
              />
              <div className='absolute top-0 left-0 inline-flex items-center p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-primary-300'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='0' y='0' width='24' height='24' stroke='none' />
                  <circle cx='10' cy='10' r='7' />
                  <line x1='21' y1='21' x2='15' y2='15' />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <Link
              className='btn btn-primary px-4 py-2 !text-sm'
              to={getCreateRoute()}
            >
              Registra un profesor
            </Link>
          </div>
        </div>

        <div className='overflow-x-auto h-full w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Grado</th>
                <th>Fecha de creación</th>
                <th>Fecha de actualización</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {teachers.length
                ? teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>
                        <div className='font-bold'>{teacher.name}</div>
                      </td>
                      <td>{teacher.group_name}</td>
                      <td>{teacher.createdAt}</td>
                      <td>{teacher.updatedAt}</td>
                      <th>
                        <div className='dropdown dropdown-hover dropdown-left'>
                          <label
                            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                            tabIndex='0'
                            className='cursor-pointer hover:bg-primary-200 rounded-full h-5 w-5 text-gray-400 duration-300 transition p-1'
                          >
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </label>
                          <ul
                            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                            tabIndex='0'
                            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10'
                          >
                            <li>
                              <Link
                                className='flex justify-between w-full'
                                to={getShowRoute(teacher.id)}
                              >
                                Ver
                                <FontAwesomeIcon icon={faEye} />
                              </Link>
                            </li>
                            <li>
                              <button
                                type='button'
                                className='flex justify-between w-full'
                                onClick={() => deleteTeacher(teacher.id)}
                              >
                                Eliminar
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </th>
                    </tr>
                  ))
                : ''}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}> </th>
                <th colSpan={2}>paginación</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
