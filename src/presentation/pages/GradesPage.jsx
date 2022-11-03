import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getGrades } from 'domain/reducers/grade.reducer';

export default function GradesPage({ setIsLoading }) {
  const getShowRoute = (id) => config.routes.grades.show.path.replace(':grade', id);

  const grades = useSelector((state) => state.grade);

  useEffect(() => {
    store.dispatch(getGrades(setIsLoading));
  }, []);

  return (
    <div className='flex flex-col h-full w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <span className='text-2xl font-semibold py-6'>Grados</span>
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
            <span className='btn btn-primary px-4 py-2 !text-sm'>
              Crear Grado
            </span>
          </div>
        </div>

        <div className='overflow-x-auto h-full w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de creación</th>
                <th>Fecha de actualización</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {grades.length
                ? grades.map((grade) => (
                    <tr key={grade.id}>
                      <td>
                        <div className='font-bold'>{grade.name}</div>
                      </td>
                      <td>{grade.createdAt}</td>
                      <td>{grade.updatedAt}</td>
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
                                to={getShowRoute(grade.id)}
                              >
                                Ver
                                <FontAwesomeIcon icon={faEye} />
                              </Link>
                            </li>
                            <li>
                              <a className='flex justify-between w-full'>
                                Eliminar
                                <FontAwesomeIcon icon={faTrash} />
                              </a>
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
