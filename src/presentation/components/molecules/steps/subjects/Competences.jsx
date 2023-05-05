import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { setCompetences } from 'domain/reducers/subject_form.reducer';

export default function Competences() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);
  const dispatch = useDispatch();
  const formSetCompetences = (items) => {
    dispatch(setCompetences(items));
  };
  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Competencias</span>
        <span className='text-sm text-gray-300'>
          ¿Cuales son las competencias que desarrollará el estudiante en esta
          asignatura?
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-4'>
          <TodoList
            defaultValue={subjectDataForm.competences}
            onChange={formSetCompetences}
            placeholder='Escriba una competencia'
          />
        </div>
      </div>
    </div>
  );
}
