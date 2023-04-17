import React, { useState } from 'react';
import services from 'domain/services';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import TodoList from 'presentation/components/molecules/TodoList';

export default function AreaForm({ setIsLoading }) {
  const [data] = useState({
    name: '',
    subjects: [],
  });
  const subjects = useSelector((state) => state.subjects.value);
  const submitForm = async () => {
    setIsLoading(true);
    const response = await services.area.store(setIsLoading, {
      name: data.name,
      subjects: data.subjects,
    });
    if (response) {
      window.location.href = `${
        config.routes.grades.show.path
      }${config.routes.grades.areas.show.path.replace(
        ':teacher',
        response.id
      )}`;
    }
  };
  return (
    <>
      <input type='checkbox' id='areaClone' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between'>
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
              <div className='flex flex-col gap-2'>
                <span className='text-md font-semibold'>Asignaturas</span>
                <TodoList
                  defaultValue={data.subjects}
                  onChange={(items) => {
                    data.subjects = items;
                  }}
                  placeholder='Seleccione las asignaturas'
                  options={subjects}
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
        </div>
      </div>
    </>
  );
}
