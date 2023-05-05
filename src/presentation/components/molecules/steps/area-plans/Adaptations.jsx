import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOrientations,
  setAdaptations,
} from 'domain/reducers/area_plan_form.reducer';

export default function Adaptations() {
  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Recomendaciones</span>
        <span className='text-sm text-gray-300'>
          ¿Que recomendaciones tendrán los profesores para sus clases?
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>
            Orientaciones para el docente
          </span>
          <TodoList
            defaultValue={areaPlanDataForm.orientations}
            onChange={(items) => {
              dispatch(setOrientations(items));
            }}
            placeholder='Escriba una orientación'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Adaptaciones</span>
          <TodoList
            defaultValue={areaPlanDataForm.adaptations}
            onChange={(items) => {
              dispatch(setAdaptations(items));
            }}
            placeholder='Escriba una adaptación'
          />
        </div>
      </div>
    </div>
  );
}
