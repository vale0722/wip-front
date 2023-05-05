import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPerformanceCompetences,
  setPerformanceIndicators,
} from 'domain/reducers/area_plan_form.reducer';

export default function Objetives() {
  const dispatch = useDispatch();
  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm.value);
  const areaCompetences = useSelector((state) => state.areaCompetences.value);
  const performanceIndicators = useSelector(
    (state) => state.performanceIndicators.value
  );
  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Objetivos</span>
        <span className='text-sm text-gray-300'>
          ¿Cuales son los objetivos y metas para esta planeación?
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-md font-bold'>Competencias</label>
          <TodoList
            placeholder='Seleccione las competencias'
            defaultValue={areaPlanDataForm.performance_competences}
            onChange={(items) => {
              dispatch(setPerformanceCompetences(items));
            }}
            options={areaCompetences}
          />
        </div>
        <hr />
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>
            Indicadores de desempeño
          </span>
          <TodoList
            placeholder='Seleccione un indicador'
            defaultValue={areaPlanDataForm.performance_indicators}
            onChange={(items) => {
              dispatch(setPerformanceIndicators(items));
            }}
            options={performanceIndicators}
          />
        </div>
      </div>
    </div>
  );
}
