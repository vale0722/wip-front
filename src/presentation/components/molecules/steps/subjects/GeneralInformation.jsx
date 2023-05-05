import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from 'domain/reducers/subject_form.reducer';

export default function GeneralInformation() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);

  const dispatch = useDispatch();
  const formSetName = (event) => {
    dispatch(setName(event.target.value));
  };
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
            onInput={formSetName}
            type='text'
            placeholder='Ingrese un nombre'
            className='block form-input !p-2'
          />
        </div>
      </div>
    </div>
  );
}
