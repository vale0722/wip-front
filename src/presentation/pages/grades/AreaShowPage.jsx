import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getArea } from 'domain/reducers/area.reducer';

export default function AreaShowPage({ setIsLoading }) {
  const areaActive = useSelector((state) => state.area);

  const { area: areaId } = useParams();
  useEffect(() => {
    store.dispatch(getArea(setIsLoading, areaId));
  }, []);

  return (
    <div className='flex flex-col h-full w-full items-center my-10'>
      <div className='w-full fixed h-full -z-10'>
        <Header height='h-full' />
      </div>
      <main className='py-2 bg-white bg-opacity-30 grid grid-cols-1 lg:grid-cols-6 gap-6 my-12 w-3xl px-2 mx-auto'>
        <aside className='col-span-2 flex flex-col gap-6'>
          <div className='bg-white shadow rounded-lg p-4'>
            <div className='flex gap-5 text-center items-center'>
              <div className='h-24 w-24 bg-primary-500 flex text-5xl text-white items-center justify-center p-2 rounded-full shadow'>
                {areaActive.id ? areaActive.grade.id : ''}
              </div>
              <p className='font-semibold'>{areaActive.name}</p>
            </div>
          </div>
          <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-4'>
              Asignaturas
            </h3>
            <ul className='bg-white shadow mt-3 gap-3 rounded-lg flex flex-col items-start justify-between w-full'>
              {areaActive.id
                ? areaActive.signatures.map((signature) => (
                    <li
                      key={signature.id}
                      className='text-sm flex px-6 py-3 flex-col w-full h-full btn btn-ghost normal-case items-start font-normal'
                    >
                      <a className='p-1' href='#'>
                        {signature.name}
                      </a>
                    </li>
                  ))
                : ''}
            </ul>
          </div>
          <Link
            to={`${config.routes.grades.show.path.replace(
              ':grade',
              areaActive.id ? areaActive.grade.id : ''
            )}${config.routes.grades.areas.plans.path.replace(
              ':area',
              areaActive.id
            )}`}
            className='text-gray-600 text-xl font-semibold mb-4 cursor-pointer flex justify-between w-full'
          >
            Gestión de planes de clase
            <span>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </Link>
        </aside>
        <article className='col-span-4 mx-10 gap-3'>
          <div className='flex gap-3 text-sm capitalize'>
            <Link
              to={`
              ${config.routes.grades.show.path.replace(
                ':grade',
                areaActive.id ? areaActive.grade.id : ''
              )}`}
            >
              {areaActive.id ? areaActive.grade.name : ''}
            </Link>
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            <Link
              to={`
              ${config.routes.grades.areas.show.path.replace(
                ':area',
                areaActive.id
              )}`}
              className='font-semibold'
            >
              {areaActive.name}
            </Link>
          </div>
          <h3 className='text-gray-700 text-2xl font-bold mb-4'>Blog</h3>
          <form className='bg-white shadow rounded-lg mb-6 p-4'>
            <textarea
              name='message'
              placeholder='Escribe algo que quieras compartir con los demás tutores'
              className='w-full rounded-lg p-2 text-sm bg-primary-50 active:outline-primary-500 focus:outline-primary-500 hover:outline-primary-500 border border-transparent appearance-none rounded-tg placeholder-gray-400'
            />
            <footer className='flex justify-between mt-2'>
              <div className='flex gap-2'>
                <span className='flex items-center transition ease-out duration-300 hover:bg-primary-500 hover:text-white bg-primary-100 w-8 h-8 px-2 rounded-full text-primary-500 cursor-pointer'>
                  <svg
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='css-i6dzq1'
                  >
                    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
                    <circle cx='8.5' cy='8.5' r='1.5' />
                    <polyline points='21 15 16 10 5 21' />
                  </svg>
                </span>
                <span className='flex items-center transition ease-out duration-300 hover:bg-primary-500 hover:text-white bg-primary-100 w-8 h-8 px-2 rounded-full text-primary-500 cursor-pointer'>
                  <svg
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='css-i6dzq1'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                </span>
                <span className='flex items-center transition ease-out duration-300 hover:bg-primary-500 hover:text-white bg-primary-100 w-8 h-8 px-2 rounded-full text-primary-500 cursor-pointer'>
                  <svg
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='css-i6dzq1'
                  >
                    <polyline points='4 17 10 11 4 5' />
                    <line x1='12' y1='19' x2='20' y2='19' />
                  </svg>
                </span>
              </div>
              <button
                type='button'
                className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
              >
                Enviar
                <svg
                  className='ml-1'
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='22' y1='2' x2='11' y2='13' />
                  <polygon points='22 2 15 22 11 13 2 9 22 2' />
                </svg>
              </button>
            </footer>
          </form>

          <div className='bg-white shadow rounded-lg mb-6'>
            <div className='flex flex-row px-2 py-3 mx-3'>
              <div className='w-auto h-auto rounded-full'>
                <img
                  className='w-12 h-12 object-cover rounded-full shadow cursor-pointer'
                  alt='User avatar'
                  src='https://picsum.photos/id/1027/200/200'
                />
              </div>
              <div className='flex flex-col mb-2 ml-4 mt-1'>
                <div className='text-gray-600 text-sm font-semibold'>
                  Prof. Clarita
                </div>
                <div className='flex w-full mt-1'>
                  <div className='text-gray-500 font-thin text-xs'>
                    Hace 30 minutos
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b border-gray-100' />
            <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'>
              <div className='grid grid-cols-1'>
                <div className=' overflow-hidden rounded-xl col-span-2 max-h-[20rem]'>
                  <img
                    className='h-full w-full object-contain'
                    src='https://i.ytimg.com/vi/_LMlqK3kV3Q/maxresdefault.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='text-gray-500 text-sm mb-6 mx-3 px-2'>
              Hoy la clase fue muy especial, todos los niños participaron.
              Deberiamos tener en cuenta esta clase de actividades para la
              próxima planeación
            </div>
            <div className='flex justify-start border-t border-gray-100'>
              <div className='flex justify-start w-full m-2'>
                <span className='transition ease-out duration-300 hover:bg-red-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-red-100 cursor-pointer'>
                  <svg
                    className='h-4 w-4 text-red-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className='flex w-full border-t border-gray-100'>
              <div className='mt-3 mx-5 flex flex-row text-xs'>
                <div className='flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center'>
                  Comentarios:
                  <div className='ml-1 text-gray-400 text-ms'> 30</div>
                </div>
              </div>
              <div className='mt-3 mx-5 w-full flex justify-end text-xs'>
                <div className='flex text-gray-700  rounded-md mb-2 mr-4 items-center'>
                  Me gusta:
                  <div className='ml-1 text-gray-400  text-ms'>5</div>
                </div>
              </div>
            </div>
            <div className='text-black p-4 antialiased flex'>
              <img
                alt=''
                className='rounded-full h-8 w-8 mr-2 mt-1 '
                src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200'
              />
              <div>
                <div className='bg-primary-50 shadow-sm rounded-lg px-4 pt-2 pb-2.5'>
                  <div className='font-semibold text-sm leading-relaxed'>
                    Prof. Martica
                  </div>
                  <div className='text-xs leading-snug md:leading-normal'>
                    Estoy totalmente de acuerdo! Mis chicos tambien se
                    divirtieron mucho y los más importante, aprendieron
                  </div>
                </div>
                <div className='text-xs  mt-0.5 text-gray-500'>
                  Hace 1 minuto
                </div>
              </div>
            </div>
            <div className='relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400'>
              <img
                alt='profile'
                className='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer'
                src='https://ui-avatars.com/api/?name=Valeria+Granada'
              />
              <input
                type='search'
                className='w-full rounded-full py-2 pl-4 pr-10 text-sm bg-primary-50 active:outline-primary-500 focus:outline-primary-500 hover:outline-primary-500  border border-transparent appearance-none rounded-tg placeholder-gray-400'
                placeholder='¿Que opinas?'
                autoComplete='off'
              />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
