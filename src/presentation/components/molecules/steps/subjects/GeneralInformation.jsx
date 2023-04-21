import React from 'react';
import { useSelector } from 'react-redux';

export default function GeneralInformation() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);

  function setName(event) {
    subjectDataForm.name = event.target.value;
  }

  function setCode(event) {
    subjectDataForm.code = event.target.value;
  }

  return (
    <div className='flex flex-col h-full w-full gap-2'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Información general</span>
        <span className='text-sm text-gray-300'>
          Ingresa la información general de la asignatura a crear
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-md font-bold'>Nombre</label>
          <input
            defaultValue={subjectDataForm.name}
            onInput={setName}
            type='text'
            placeholder='Ingrese un nombre'
            className='block form-input !p-2'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-md font-bold'>Código</label>
          <input
            defaultValue={subjectDataForm.code}
            onInput={setCode}
            type='text'
            placeholder='Ingrese el código que identifica la asignatura'
            className='block form-input !p-2'
          />
        </div>
      </div>
    </div>
  );
}
