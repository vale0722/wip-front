import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getTeacher } from 'domain/reducers/teacher.reducer';

export default function TeacherShowPage({ setIsLoading }) {
  const teacher = useSelector((state) => state.teacher);
  const { teacher: teacherId } = useParams();
  useEffect(() => {
    store.dispatch(getTeacher(setIsLoading, teacherId));
  }, []);
console.log(teacher.plans);
  return (
    <div className='flex flex-col h-full w-full'>
      <Header height='h-full' />
      <div className='flex gap-3 text-sm capitalize m-10 mb-0'>
        <Link to={`${config.routes.auth.teachers.path}`}>Profesores</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <Link
          to={`${config.routes.teachers.show.path.replace(
            ':teacher',
            teacherId
          )}`}
          className='font-semibold'
        >
          {teacher.id ? teacher.name : ''}
        </Link>
      </div>
      {teacher.id ? (
        <main className='py-2 bg-white bg-opacity-30 grid grid-cols-1 lg:grid-cols-6 gap-6 m-8 w-3xl px-2'>
          <aside className='col-span-2 flex flex-col gap-6'>
            <div className='bg-white shadow rounded-lg p-4'>
              <div className='flex flex-col gap-4 text-center items-center'>
                <label
                  tabIndex='0'
                  className='w-32 h-32 btn btn-ghost btn-circle avatar'
                >
                  <div className='w-28 rounded-full'>
                    <img
                      alt='profile'
                      src={`https://ui-avatars.com/api/?name=${teacher.name.replace(
                        ' ',
                        '+'
                      )}`}
                    />
                  </div>
                </label>
                <p className='font-semibold'>{teacher.name}</p>
                <p className='text-sm font-semibold'>{teacher.email}</p>
                <p className='text-xs text-gray-300'>{teacher.created_at}</p>
              </div>
            </div>
            <div className='w-full'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Grupos
              </h3>
              <ul className='bg-white shadow mt-3  rounded-lg p-6 flex items-center justify-between space-x-2'>
                <li
                  key={teacher.group_id}
                  className='flex flex-col items-center space-y-2'
                  data-tip={teacher.group_name}
                >
                  <a
                    title={teacher.group_name}
                    className='block text-primary-500 hover:text-primary-500 transition ease-in duration-200 hover:scale-105 font-bold h-full w-full flex items-center justify-center capitalize'
                    href='#'
                  >
                    {teacher.group_name}
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div className='flex flex-col gap-4 w-full col-span-full lg:col-span-4'>
            <div>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Seguimientos
              </h3>
              <ul className='bg-white shadow mt-3  rounded-lg p-6 flex flex-co items-center justify-between space-x-2'>
                {teacher.id
                  ? teacher.plans.length
                    ? teacher.plans.map((son) => (
                        <li
                          key={son.id}
                          className='flex flex-col items-center space-y-2 w-12 h-12'
                          data-tip={son.id}
                        >
                          <Link
                            title={son.id}
                            className='block text-primary-500 hover:text-primary-500 transition ease-in duration-200 hover:scale-105 font-bold h-full w-full flex items-center justify-center rounded-full'
                            to='/'
                          >
                            {son.area_plan.name}
                          </Link>
                        </li>
                      ))
                    : 'No se han creado seguimientos'
                  : ''}
              </ul>
            </div>
          </div>
        </main>
      ) : (
        ''
      )}
    </div>
  );
}
