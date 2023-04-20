import React, { useState } from 'react';
import services from 'domain/services';
import config from 'domain/config';
import { useParams } from 'react-router-dom';

export default function AreaForm({ setIsLoading }) {
  const [data] = useState({
    name: '',
  });

  const { grade: gradeId } = useParams();

  const submitForm = async () => {
    setIsLoading(true);
    const response = await services.area.store(setIsLoading, gradeId, {
      name: data.name,
    });
    if (response) {
      window.location.href = `${
        config.routes.grades.show.path
      }${config.routes.grades.areas.show.path.replace(':area', response.id)}`;
    }
  };
  return (
    <>
      <input type='checkbox' id='areaClone' className='modal-toggle' />
      <label
        htmlFor='areaClone'
        className='modal modal-bottom sm:modal-middle cursor-pointer'
      >
        <label
          className='modal-box relative gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between'
          htmlFor=''
        >
          <div className='flex flex-col h-full w-full gap-2'>
            <div className='flex flex-col gap-2 mb-6'>
              <span className='text-xl font-semibold'>Información general</span>
              <span className='text-sm text-gray-300'>
                Ingresa la información general del area integrada a registrar
              </span>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Nombre</label>
                <input
                  type='text'
                  onInput={(event) => {
                    data.name = event.target.value;
                  }}
                  defaultValue={data.name}
                  placeholder='Ingrese un nombre'
                  className='block form-input !p-2'
                />
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
        </label>
      </label>
    </>
  );
}
