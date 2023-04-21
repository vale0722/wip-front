import React, { useEffect, useState } from 'react';
import Header from 'presentation/components/atoms/Header';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useDispatch, useSelector } from 'react-redux';
import { getGrade } from 'domain/reducers/grade.reducer';
import services from 'domain/services';
import AreaForm from 'presentation/components/molecules/AreaForm';
import { getSubjects } from 'domain/reducers/subjects.reducer';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteArea from 'presentation/components/molecules/DeleteArea';

export default function GradesShowPage({ setIsLoading, isLoading }) {
  const gradeActive = useSelector((state) => state.grade.value);
  const getShowRoute = (id) =>
    config.routes.grades.show.path.replace(':grade', gradeActive.id) +
    config.routes.grades.areas.show.path.replace(':area', id);

  const { grade: gradeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    services.grades.show(setIsLoading, gradeId).then((data) => {
      dispatch(getGrade(data));
    });

    services.subjects.index(setIsLoading, gradeId).then((data) => {
      dispatch(getSubjects(data));
    });
  }, [gradeId]);

  const [areaActive, setAreaActive] = useState({});

  return !isLoading && gradeActive.id ? (
    <div className='flex flex-col h-full items-center m-8'>
      <Header height='h-full' />
      <main className='bg-white bg-opacity-30 grid grid-cols-1 lg:grid-cols-6 gap-6 my-8 w-3xl px-2 mx-auto'>
        <aside className='col-span-2 flex flex-col gap-6'>
          <div className='bg-white shadow rounded-lg p-10'>
            <div className='flex flex-col gap-1 text-center items-center'>
              <div className='h-32 w-32 bg-primary-500 flex text-5xl text-white items-center justify-center p-2 rounded-full shadow mb-4'>
                {gradeActive.id}
              </div>
              <p className='font-semibold capitalize'>{gradeActive.name}</p>
            </div>
          </div>
          <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-4'>
              Profesores
            </h3>
            <ul className='bg-white shadow mt-3  rounded-lg p-6 flex items-center justify-between space-x-2'>
              {gradeActive.teachers.map((teacher) => (
                <li
                  key={teacher.id}
                  className='flex flex-col items-center space-y-2 tooltip tooltip-primary transition ease-in duration-200 hover:scale-105'
                  data-tip={teacher.name}
                >
                  <Link
                    className='block bg-white p-1 rounded-full'
                    to={config.routes.teachers.show.path.replace(
                      ':teacher',
                      teacher.id
                    )}
                  >
                    <img
                      alt='profile'
                      className='rounded-full'
                      src={`https://ui-avatars.com/api/?name=${teacher.name.replace(
                        ' ',
                        '+'
                      )}`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-4'>Grupos</h3>
            <ul className='bg-white shadow mt-3  rounded-lg p-6 flex items-center justify-between space-x-2'>
              {gradeActive.id
                ? gradeActive.groups.map((group) => (
                    <li
                      key={group.id}
                      className='flex flex-col items-center space-y-2 w-12 h-12'
                      data-tip={group.letter}
                    >
                      <a
                        title={group.letter}
                        className='block text-primary-500 hover:text-primary-500 transition ease-in duration-200 hover:scale-105 font-bold border-2 h-full w-full border-primary-500 bg-white flex items-center justify-center rounded-full'
                        href='#'
                      >
                        {group.letter}
                      </a>
                    </li>
                  ))
                : []}
            </ul>
          </div>
        </aside>
        <article className='col-span-4 mx-10 gap-3'>
          <div className='flex gap-3 text-sm'>
            <Link
              to={`${config.routes.grades.show.path.replace(
                ':grade',
                gradeActive.id
              )}`}
              className='font-semibold'
            >
              {gradeActive.name}
            </Link>
          </div>
          <h3 className='text-gray-700 text-2xl font-bold mb-4'>
            Areas Integradas
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 my-12 w-3xl px-2 mx-auto'>
            {gradeActive.id
              ? gradeActive.areas.map((area) => (
                  <li
                    key={area.id}
                    className='flex flex-col items-center space-y-2 tooltip tooltip-primary transition ease-in duration-200 hover:scale-105'
                    data-tip={area.name}
                  >
                    <div className='indicator group'>
                      <a
                        href='#confirm-delete'
                        onClick={() => setAreaActive(area)}
                        className='cursor-pointer hidden group-hover:flex indicator-item badge badge-error p-1'
                      >
                        <FontAwesomeIcon
                          className='h-3 w-3 text-white'
                          icon={faXmark}
                        />
                      </a>
                      <Link
                        className='w-32 h-32 block bg-white p-1 rounded-full'
                        to={getShowRoute(area.id)}
                      >
                        <img
                          className='h-full w-full rounded-full'
                          src={
                            area.image ??
                            `https://ui-avatars.com/api/?name=${area.name.replace(
                              ' ',
                              '+'
                            )}`
                          }
                          alt={area.name}
                        />
                      </Link>
                    </div>
                    <h4 className='text-gray-700 text-sm font-semibold'>
                      {area.name}
                    </h4>
                  </li>
                ))
              : ''}

            <li
              data-tip='Crear área integrada'
              className='flex flex-col items-center space-y-2 tooltip tooltip-primary transition ease-in duration-200 hover:scale-105'
            >
              <label
                htmlFor='areaClone'
                className='w-32 h-32 block bg-white p-1 rounded-full'
              >
                <div className='w-32 h-32 rounded-full bg-primary-300 fill-white flex items-center justify-center'>
                  <svg
                    className='w-10 h-10'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
                  </svg>
                </div>
              </label>
              <h4 className='text-gray-700 text-sm font-semibold'>
                Crear una nueva área integrada
              </h4>
            </li>
          </div>
          <AreaForm setIsLoading={setIsLoading} isLoading={isLoading} />
        </article>
      </main>

      <DeleteArea
        setIsLoading={setIsLoading}
        areaId={areaActive.id}
        setAreaActive={setAreaActive}
        refresh={() =>
          services.grades.show(setIsLoading, gradeId).then((data) => {
            dispatch(getGrade(data));
          })
        }
      />
    </div>
  ) : (
    ''
  );
}
