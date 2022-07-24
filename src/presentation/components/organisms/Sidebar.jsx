import React from 'react';
import config from 'domain/config';

export default function Sidebar() {
  return (
    <div className='drawer-side shadow-lg rounded-2xl'>
      <label htmlFor='sidebar' className='drawer-overlay' />
      <ul className='menu px-4 py-10 overflow-y-auto w-80 md:w-64 bg-base-100 text-base-content shadow-lg rounded-2xl'>
        <a
          href={config.routes.login.path}
          className='btn btn-ghost btn-circle avatar mb-10 w-32 h-32 self-center'
        >
          <div className='w-32 h-32 rounded-full'>
            <img alt='profile' src='https://placeimg.com/80/80/people' />
          </div>
        </a>
        {Object.values(config.routes.auth).map(({ path, title }) => (
          <li key={title}>
            <a href={path}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
