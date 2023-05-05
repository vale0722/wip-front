import React from 'react';
import TodoList from 'presentation/components/molecules/TodoList';
import TodoListModal from 'presentation/components/molecules/TodoListModal';
import ActivityForm from 'presentation/components/molecules/ActivityForm';
import { useDispatch, useSelector } from 'react-redux';
import Anexo from 'presentation/components/molecules/Anexo';
import Task from 'presentation/components/molecules/Task';
import Reference from 'presentation/components/molecules/Reference';
import {
  setActiviesPlanCreative,
  setPerformanceTopics,
  setQuestion,
  setActivities,
  setTasks,
  setAnnexes,
  setReferences,
} from 'domain/reducers/area_plan_form.reducer';

export default function Content() {
  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm.value);
  const areaTopics = useSelector((state) => state.areaTopics.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col h-full w-full gap-2 overflow-y-scroll'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Contenido</span>
        <span className='text-sm text-gray-300'>
          Describe las tareas, anexos, temas y referencias que estarán incluidos
          en la planeación
        </span>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Agenda Creativa</span>
          <TodoList
            defaultValue={areaPlanDataForm.activiesPlanCreative}
            inputComponent={Task}
            onChange={(items) => {
              dispatch(setActiviesPlanCreative(items));
            }}
            placeholder='Escriba una actividad'
          />
        </div>
        <hr />
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Temas/Ejes/Contenidos</span>
          <TodoList
            defaultValue={areaPlanDataForm.performance_topics}
            onChange={(items) => {
              dispatch(setPerformanceTopics(items));
            }}
            placeholder='Seleccione un tema'
            options={areaTopics}
          />
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          <label className='text-md font-bold'>Pregunta problematizadora</label>
          <textarea
            defaultValue={areaPlanDataForm.question}
            onInput={(event) => {
              dispatch(setQuestion(event.target.value));
            }}
            placeholder='Ingrese la pregunta problematizadora'
            className='block form-input !p-2'
          />
        </div>
        <hr />
        <TodoListModal
          defaultValue={areaPlanDataForm.activities}
          onChange={(items) => {
            dispatch(setActivities(items));
          }}
          modalComponent={ActivityForm}
          title='Actividades Generales'
        />
        <hr />
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Tareas</span>
          <TodoList
            defaultValue={areaPlanDataForm.tasks}
            inputComponent={Task}
            onChange={(items) => {
              dispatch(setTasks(items));
            }}
            placeholder='Escriba una tarea'
          />
        </div>
        <hr />
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Anexos</span>
          <TodoList
            defaultValue={areaPlanDataForm.annexes}
            inputComponent={Anexo}
            onChange={(items) => {
              dispatch(setAnnexes(items));
            }}
            placeholder='Ingrese un anexo'
          />
        </div>
        <hr />
        <div className='flex flex-col gap-4'>
          <span className='text-md font-semibold'>Referencias</span>
          <TodoList
            defaultValue={areaPlanDataForm.references}
            inputComponent={Reference}
            onChange={(items) => {
              dispatch(setReferences(items));
            }}
            placeholder='Ingrese un referencia'
          />
        </div>
      </div>
    </div>
  );
}
