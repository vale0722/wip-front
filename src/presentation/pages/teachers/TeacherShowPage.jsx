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
import { useDispatch, useSelector } from 'react-redux';
import { getTeacher } from 'domain/reducers/teacher.reducer';
import services from 'domain/services';

export default function TeacherShowPage({ setIsLoading }) {
  const teacher = useSelector((state) => state.teacher.value);
  const { teacher: teacherId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    services.teachers
      .show(setIsLoading, teacherId)
      .then((data) => dispatch(getTeacher(data)));
  }, [dispatch]);

  const getShowCloneRoute = (clone) =>
    config.routes.grades.show.path.replace(':grade', teacher.grade_id) +
    config.routes.grades.areas.plans.routes.clones.routes.show.path
      .replace(':area', clone.area.id)
      .replace(':plan', clone.parent.id)
      .replace(':clone', clone.id);

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
          <div className='flex flex-col gap-4 w-full col-span-full lg:col-span-4 relative'>
            <div>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Seguimientos
              </h3>
              <div className='h-full w-full'>
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
                    {teacher.id && teacher.plans.length
                      ? teacher.plans.map((son) => (
                          <tr key={son.id}>
                            <td>
                              <Link
                                title={son.id}
                                className='block font-bold transition ease-in duration-200 hover:scale-105 h-full w-full cursor-pointer'
                                to={getShowCloneRoute(son)}
                              >
                                {son.name}
                              </Link>
                            </td>
                            <td>{son.createdAt}</td>
                            <td>{son.updatedAt}</td>
                            <td>
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
                                      to={getShowCloneRoute(son)}
                                    >
                                      Ver
                                      <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                  </li>
                                  <li>
                                    <button
                                      type='button'
                                      className='flex justify-between w-full'
                                    >
                                      Eliminar
                                      <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))
                      : 'No se han creado seguimientos'}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      ) : (
        ''
      )}
    </div>
  );
}
