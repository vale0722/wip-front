import React from 'react';
import Header from 'presentation/components/atoms/Header';

export default function GradesPage() {
  return (
    <div className='flex flex-col h-full w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <span className='text-2xl font-semibold py-6'>Grados</span>
        <div className='mb-4 flex justify-between items-center'>
          <div className='flex-1 pr-4'>
            <div className='relative md:w-1/3'>
              <input
                type='search'
                className='w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-300 bg-primary-50 font-medium'
                placeholder='Buscar'
              />
              <div className='absolute top-0 left-0 inline-flex items-center p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-primary-300'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='0' y='0' width='24' height='24' stroke='none' />
                  <circle cx='10' cy='10' r='7' />
                  <line x1='21' y1='21' x2='15' y2='15' />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className='btn btn-primary px-4 py-2 !text-sm'>
              Crear Grado
            </span>
          </div>
        </div>

        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Número de grupos</th>
                <th>Fecha de creación</th>
                <th>Fecha de actualización</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='font-bold'>Primero</div>
                </td>
                <td>4</td>
                <td>2022-01-01</td>
                <td>2022-01-02</td>
                <th> : </th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}> </th>
                <th colSpan={2}>paginación</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
