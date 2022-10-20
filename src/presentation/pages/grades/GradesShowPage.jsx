import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getGrade } from 'domain/reducers/grade.reducer';

const teachers = [
  {
    id: 1,
    name: 'Martica',
  },
  {
    id: 2,
    name: 'Clarita',
  },
  {
    id: 3,
    name: 'Laura',
  },
  {
    id: 4,
    name: 'Luz',
  },
];

export default function GradesShowPage({ setIsLoading, isLoading }) {
  const gradeActive = useSelector((state) => state.grade);
  const getShowRoute = (id) =>
    config.routes.grades.show.path.replace(':grade', gradeActive.id) +
    config.routes.grades.areas.show.path.replace(':area', id);

  const { grade: gradeId } = useParams();
  useEffect(() => {
    store.dispatch(getGrade(setIsLoading, gradeId));
  }, [gradeId]);

  return !isLoading ? (
    <div className='flex flex-col h-full w-full items-center my-10'>
      <div className='w-full fixed h-full -z-10'>
        <Header height='h-full' />
      </div>
      <main className='py-2 bg-white bg-opacity-30 grid grid-cols-1 lg:grid-cols-6 gap-6 my-12 w-3xl px-2 mx-auto'>
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
              {teachers.map((teacher) => (
                <li
                  key={teacher.id}
                  className='flex flex-col items-center space-y-2 tooltip tooltip-primary transition ease-in duration-200 hover:scale-105'
                  data-tip={teacher.name}
                >
                  <a className='block bg-white p-1 rounded-full' href='#'>
                    <img
                      className='w-16 rounded-full'
                      src={`https://source.unsplash.com/random/200x200?sig=${teacher.id}`}
                      alt={teacher.name}
                    />
                  </a>
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
                    <Link
                      className='w-32 h-32 block bg-white p-1 rounded-full'
                      to={getShowRoute(area.id)}
                    >
                      <img
                        className='h-full w-full rounded-full'
                        src={area.image}
                        alt={area.name}
                      />
                    </Link>
                    <h4 className='text-gray-700 text-sm font-semibold'>
                      {area.name}
                    </h4>
                  </li>
                ))
              : ''}
          </div>
        </article>
      </main>
    </div>
  ) : (
    ''
  );
}
