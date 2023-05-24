import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Step from 'presentation/components/atoms/Step';
import GeneralInformation from 'presentation/components/molecules/steps/subjects/GeneralInformation';
import Objetives from 'presentation/components/molecules/steps/subjects/Objetives';
import Content from 'presentation/components/molecules/steps/subjects/Content';
import Competences from 'presentation/components/molecules/steps/subjects/Competences';
import Indicators from 'presentation/components/molecules/steps/subjects/Indicators';
import { useSelector } from 'react-redux';
import service from 'domain/services';
import { useParams } from 'react-router-dom';
import config from 'domain/config';

export default function SubjectForm({ setIsLoading }) {
  const steps = [
    {
      name: 'Información general',
      description: 'Ingresa la información general de la asignatura a crear',
      component: GeneralInformation,
    },
    {
      name: 'Objetivos',
      description:
        '¿Cuales son los objetivos que desarrollaran los estudiante con el contenido de esta asignatura?',
      component: Objetives,
    },
    {
      name: 'Competencias',
      description:
        '¿Cuales son las competencias que desarrollará el estudiante en esta asignatura?',
      component: Competences,
    },
    {
      name: 'Indicadores de desempeño',
      description:
        'Describe los indicadores de desempeño con los cuales serán evaluados los estudiantes',
      component: Indicators,
    },
    {
      name: 'Temas',
      description:
        'Describe los Temas que se verán en el transcurso del año académico',
      component: Content,
    },
  ];

  const subjectDataForm = useSelector((state) => state.subjectDataForm.value);
  const { area: areaId, grade: gradeId } = useParams();

  const submitForm = async () => {
    const response = await service.subjects.store(
      setIsLoading,
      gradeId,
      subjectDataForm
    );

    if (response?.id) {
      window.location.href =
        config.routes.grades.show.path.replace(':grade', gradeId) +
        config.routes.grades.areas.show.path.replace(':area', areaId);
      return;
    }

    alert(JSON.stringify(Object.values(response.errors)));
  };

  const [stepActive, setStepActive] = useState(steps[0]);
  const [transformStepsMethod, setTransformStepsMethod] = useState(
    steps.map((value, key) => {
      const item = value;
      item.index = key;
      item.completed = false;
      return item;
    })
  );

  function changeStep(step) {
    stepActive.completed = true;
    setTransformStepsMethod(transformStepsMethod);
    setStepActive(step);
  }

  function next() {
    stepActive.completed = true;
    if (stepActive.index !== steps.length - 1) {
      setStepActive(transformStepsMethod[stepActive.index + 1]);
    }

    setTransformStepsMethod(transformStepsMethod);
  }

  function back() {
    stepActive.completed = false;
    if (stepActive.index !== 0) {
      setStepActive(transformStepsMethod[stepActive.index - 1]);
    }

    setTransformStepsMethod(transformStepsMethod);
  }

  return (
    <div className='flex flex-col gap-6 py-10 px-8 md:px-0'>
      <div className='flex justify-between items-start gap-6 relative'>
        <div className='hidden md:flex flex-col sticky bg-white gap-2 shadow p-8 rounded-lg flex flex-col items-start justify-between'>
          {transformStepsMethod.map((step, key) => (
            <Step
              key={uuidv4()}
              onClick={() => changeStep(step)}
              isCurrent={stepActive.index === step.index}
              item={step}
              isLast={key === steps.length - 1}
            />
          ))}
        </div>
        <div className='flex flex-col h-full gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between w-full'>
          {React.createElement(stepActive.component, {
            transformStepsMethod,
            setIsLoading,
            stepActive,
          })}
        </div>
      </div>
      <div className='flex items-end justify-end gap-2'>
        {stepActive.index !== steps.length - 1 ? (
          <>
            {stepActive.index !== 0 ? (
              <button
                type='button'
                onClick={() => back()}
                className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
              >
                Atrás
              </button>
            ) : (
              ''
            )}
            <button
              type='button'
              onClick={() => next()}
              className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
            >
              Siguiente
            </button>
          </>
        ) : (
          <>
            <button
              type='button'
              onClick={() => back()}
              className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
            >
              Atrás
            </button>
            <button
              type='button'
              onClick={submitForm}
              className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
            >
              Finalizar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
