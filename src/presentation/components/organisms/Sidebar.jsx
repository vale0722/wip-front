import React, { useEffect } from 'react';
import config from 'domain/config';
import { Link } from 'react-router-dom';
import { useMatch, useResolvedPath } from 'react-router';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getGrades } from 'domain/reducers/grade.reducer';

export default function Sidebar({ setIsLoading }) {
  const match = (route) =>
    useMatch({
      path: useResolvedPath(route).pathname,
      end: false,
      strict: true,
      sensitive: true,
    });

  const getShowRoute = (id) =>
    config.routes.grades.show.path.replace(':grade', id);

  const grades = useSelector((state) => state.grades);

  useEffect(() => {
    store.dispatch(getGrades(setIsLoading));
  }, []);

  function calculeMatch(showRoute) {
    return showRoute === window.location.pathname ? 'btn-active' : '';
  }

  return (
    <div className='drawer-side shadow'>
      <label htmlFor='sidebar' className='drawer-overlay' />
      <ul className='menu px-4 py-10 overflow-y-auto w-80 md:w-64 bg-base-100 text-base-content shadow-lg rounded-2xl'>
        <a
          href={config.routes.login.path}
          className='btn btn-ghost btn-circle avatar mb-10 w-40 h-40 self-center'
        >
          <div className='w-32 h-32'>
            <img
              src={`${config.statics}brand/logo.png`}
              alt={config.app_name}
            />
          </div>
        </a>
        {Object.values(config.routes.auth).map(({ path, title }) => (
          <li
            className={`${
              match(path) && (path !== '/' || window.location.pathname === '/')
                ? 'btn-active'
                : ''
            }`}
            key={title}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
        <div
          /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
          tabIndex='0'
          className='collapse collapse-arrow collapse-open'
        >
          <div className='collapse-title rounded-xl text-gray-300 font-medium hover:bg-primary-300 hover:bg-opacity-30'>
            Grados
          </div>
          <div className='collapse-content'>
            {grades.length
              ? grades.map((grade) => (
                  <li
                    className={`capitalize ${calculeMatch(
                      getShowRoute(grade.id)
                    )}`}
                    key={grade.id}
                  >
                    <Link to={getShowRoute(grade.id)}>{grade.name}</Link>
                  </li>
                ))
              : ''}
          </div>
        </div>
      </ul>
    </div>
  );
}
