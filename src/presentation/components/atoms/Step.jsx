import React from 'react';

export default function Step({ isLast, isCurrent, item, onClick }) {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className='cursor-pointer flex gap-6 w-full relative group'
    >
      <div
        className={
          !isLast
            ? 'flex flex-col items-center text-secondary-500 relative group'
            : 'flex flex-col relative'
        }
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {!isCurrent ? (
          item.completed ? (
            <div className='transition duration-500 ease-in-out group-hover:scale-105 relative rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2 text-white bg-gray-900 border-secondary-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                fill='currentColor'
                viewBox='-8 -8 36 32'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z'
                />
              </svg>
            </div>
          ) : (
            <div className='transition duration-500 ease-in-out group-hover:scale-105 rounded-full h-10 w-10 py-3 border-2 text-white bg-gray-150 border-secondary-150'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                fill='currentColor'
                viewBox='-8 -12 28 32'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='5' cy='5' r='10' />
              </svg>
            </div>
          )
        ) : (
          <div className='transition duration-500 ease-in-out group-hover:scale-105 rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2 text-white bg-gray-900 border-secondary-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='currentColor'
              viewBox='-8 -12 28 32'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='5' cy='5' r='10' />
            </svg>
          </div>
        )}
        {!isLast ? (
          <div
            className={`flex-auto border border-t-2 h-10 transition duration-500 ease-in-out ${
              item.completed ? 'border-secondary-500' : 'border-secondary-150'
            }`}
          />
        ) : (
          ''
        )}
      </div>

      <div className='flex flex-col gap-2 items-start text-start text-sm transition duration-500 ease-in-out group-hover:scale-105'>
        <span className='font-bold'>{item.name}</span>
        <span className='text-xs text-gray-300'>{item.description}</span>
      </div>
    </button>
  );
}
