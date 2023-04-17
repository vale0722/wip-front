import React, { useEffect } from 'react';
import config from 'domain/config';
import { Link } from 'react-router-dom';
import { useMatch, useResolvedPath } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getGrades } from 'domain/reducers/grade.reducer';
import HtmlParser from 'html-react-parser';
import services from 'domain/services';

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

  const grades = useSelector((state) => state.grades.value);
  const dispatch = useDispatch();
  useEffect(() => {
    services.grades.index(setIsLoading).then((data) => {
      dispatch(getGrades(data));
    });
  }, [dispatch]);

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
        {Object.values(config.routes.auth).map(({ path, title, icon }) => (
          <li
            className={`${
              match(path) && (path !== '/' || window.location.pathname === '/')
                ? 'btn-active'
                : ''
            }`}
            key={title}
          >
            <Link className='flex gap-3 items-center' to={path}>
              <div className='h-4 w-4 fill-gray-500'>{HtmlParser(icon)}</div>
              {title}
            </Link>
          </li>
        ))}
        <div
          /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
          tabIndex='0'
          className='collapse collapse-arrow collapse-open'
        >
          <div className='collapse-title flex items-center gap-3 rounded-xl text-gray-300 font-medium hover:bg-primary-300 hover:bg-opacity-30'>
            <div className='h-4 w-4 fill-gray-500'>
              {HtmlParser(config.routes.grades.show.icon)}
            </div>
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
