import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { setTopics } from 'domain/reducers/subject_form.reducer';

export default function Content() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);
  const dispatch = useDispatch();
  const formSetTopics = (items) => {
    dispatch(setTopics(items));
  };

  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Temas</span>
        <span className='text-sm text-gray-300'>
          Describe los Temas que se verán en el transcurso del año académico
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Temas/Ejes/Contenidos</span>
          <TodoList
            defaultValue={subjectDataForm.topics}
            onChange={formSetTopics}
            placeholder='Seleccione un tema'
          />
        </div>
      </div>
    </div>
  );
}
