import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useSelector } from 'react-redux';

export default function Adaptations() {
  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm);

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
              areaPlanDataForm.orientations = items;
            }}
            placeholder='Escriba una orientación'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Adaptaciones</span>
          <TodoList
            defaultValue={areaPlanDataForm.adaptations}
            onChange={(items) => {
              areaPlanDataForm.adaptations = items;
            }}
            placeholder='Escriba una adaptación'
          />
        </div>
      </div>
    </div>
  );
}
