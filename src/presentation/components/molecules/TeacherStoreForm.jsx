import React from 'react';
import { useSelector } from 'react-redux';

export default function TeacherStoreForm({ setIsLoading }) {
  const grades = useSelector((state) => state.grades);
  const submitForm = async () => {
    setIsLoading(true);
    alert('aca envio');
  };

  return (
    <div className='flex flex-col gap-6 py-10'>
      <div className='flex justify-between items-start gap-6 relative'>
        <div className='flex flex-col h-full gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between w-full'>
          <div className='flex flex-col h-full w-full gap-2'>
            <div className='flex flex-col gap-2 mb-6'>
              <span className='text-xl font-semibold'>Información general</span>
              <span className='text-sm text-gray-300'>
                Ingresa la información general del profesor a registrar
              </span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Nombre</label>
                <input
                  type='text'
                  placeholder='Ingrese un nombre'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Apellído</label>
                <input
                  type='text'
                  placeholder='Ingrese su apellído'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Correo Electrónico</label>
                <input
                  type='text'
                  placeholder='Ingrese un correo'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Grado</label>
                <select className='block form-input !p-2'>
                  <option value='default' disabled>
                    selecciona un tipo
                  </option>
                  {grades.length
                    ? grades.map((grade) => (
                        <option
                          key={grade.id}
                          value={grade.id}
                          className='capitalize'
                        >
                          {grade.name}
                        </option>
                      ))
                    : ''}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <button
          type='button'
          onClick={submitForm}
          className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
