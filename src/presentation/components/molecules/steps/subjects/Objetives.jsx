import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { setObjetives } from 'domain/reducers/subject_form.reducer';

export default function Objetives() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);
  const dispatch = useDispatch();
  const formSetObjetives = (items) => {
    dispatch(setObjetives(items));
  };
  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Objetivos</span>
        <span className='text-sm text-gray-300'>
          ¿Cuales son los objetivos que desarrollaran los estudiante con el
          contenido de esta asignatura?
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-2'>
          <TodoList
            placeholder='Seleccione los objetivos'
            defaultValue={subjectDataForm.objetives}
            onChange={formSetObjetives}
          />
        </div>
      </div>
    </div>
  );
}
