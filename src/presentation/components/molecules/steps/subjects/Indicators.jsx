import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from 'presentation/components/molecules/Indicator';
import { setIndicators } from 'domain/reducers/subject_form.reducer';

export default function Indicators() {
  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);
  const dispatch = useDispatch();
  const formSetIndicators = (items) => {
    dispatch(setIndicators(items));
  };
  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Indicadores de desempeño</span>
        <span className='text-sm text-gray-300'>
          Describe los indicadores de desempeño con los cuales serán evaluados
          los estudiantes
        </span>
      </div>
      <div className='flex flex-col gap-4'>
        <TodoList
          placeholder='Seleccione un indicador'
          defaultValue={subjectDataForm.indicators}
          inputComponent={Indicator}
          onChange={formSetIndicators}
        />
      </div>
    </div>
  );
}
