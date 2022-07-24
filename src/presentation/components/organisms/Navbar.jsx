import React from 'react';
import config from 'domain/config';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <label
          htmlFor='sidebar'
          className='btn btn-square btn-ghost drawer-button lg:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </label>
      </div>
      <div className='flex-1'>
        <a className='cursor-pointer normal-case text-xl font-medium'>
          {config.app_name}
        </a>
      </div>
      <div className='flex-none'>
        <span className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-xs badge-primary indicator-item' />
          </div>
        </span>
        <a
          href={config.routes.login.path}
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-10 rounded-full'>
            <img
              alt='profile'
              src='https://ui-avatars.com/api/?name=Valeria+Granada'
            />
          </div>
        </a>
      </div>
    </div>
  );
}