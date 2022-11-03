import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faEllipsisV,
  faEye,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getAreaPlans } from 'domain/reducers/area_plan.reducer';
import { getArea } from 'domain/reducers/area.reducer';

export default function AreaPlansPage({ setIsLoading }) {
  const areaActive = useSelector((state) => state.area);
  const plans = useSelector((state) => state.areaPlan);

  const { area: areaId, grade: gradeId } = useParams();

  useEffect(() => {
    store.dispatch(getArea(setIsLoading, areaId));
    store.dispatch(getAreaPlans(setIsLoading, gradeId, areaId));
  }, []);

  const getShowRoute = (id) =>
    config.routes.grades.show.path.replace(':grade', gradeId) +
    config.routes.grades.areas.plans.routes.show.path
      .replace(':area', areaId)
      .replace(':plan', id);

  const getCreateRoute = () =>
    config.routes.grades.show.path.replace(':grade', gradeId) +
    config.routes.grades.areas.plans.routes.store.path.replace(':area', areaId);

  return (
    <div className='flex flex-col h-full w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <div className='flex gap-3 text-sm'>
          <Link to={config.routes.grades.show.path.replace(':grade', gradeId)}>
            {areaActive.id ? areaActive.grade.name : ''}
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(':grade', gradeId) +
              config.routes.grades.areas.show.path.replace(
                ':area',
                areaActive.id
              )
            }`}
          >
            {areaActive.name}
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(':grade', gradeId) +
              config.routes.grades.areas.plans.path.replace(':area', areaId)
            }`}
            className='font-semibold'
          >
            Planes de clase
          </Link>
        </div>
        <span className='text-2xl font-semibold py-6'>
          Gestión de planes de clase: {areaActive.name}
        </span>
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
          <Link
            className='btn btn-primary px-4 py-2 !text-sm'
            to={getCreateRoute()}
          >
            Crear Plan de Clase
          </Link>
        </div>

        <div className='overflow-x-auto h-full w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th className='truncate'>Nombre</th>
                <th>Estado</th>
                <th>Fecha de inicio</th>
                <th>Fecha de finalización</th>
                <th>Autor</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {plans.length ? (
                plans.map((plan) => (
                  <tr key={plan.id}>
                    <td className='w-48 flex'>
                      <div className='font-bold text-ellipsis overflow-hidden'>
                        {plan.name}
                      </div>
                    </td>
                    <td>{plan.status}</td>
                    <td>{plan.startDate}</td>
                    <td>{plan.endDate}</td>
                    <td>{plan.author}</td>
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
                              to={getShowRoute(plan.id)}
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
              ) : (
                <tr>
                  <th>{plans.length}</th>{' '}
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={5}> </th>
                <th colSpan={2}>paginación</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
