import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Step from 'presentation/components/atoms/Step';
import GeneralInformation from 'presentation/components/molecules/steps/area-plans/GeneralInformation';
import Objetives from 'presentation/components/molecules/steps/area-plans/Objetives';
import Adaptations from 'presentation/components/molecules/steps/area-plans/Adaptations';
import Content from 'presentation/components/molecules/steps/area-plans/Content';
import { useSelector } from 'react-redux';
import service from 'domain/services';
import { useParams } from 'react-router-dom';
import config from 'domain/config';

export default function AreaPlanForm({ setIsLoading }) {
  const steps = [
    {
      name: 'Información general',
      description: 'Ingresa la información general del plan de area a crear',
      component: GeneralInformation,
    },
    {
      name: 'Objetivos',
      description: '¿Cuales son los objetivos y metas para esta planeación?',
      component: Objetives,
    },
    {
      name: 'Contenido',
      description:
        'Describe las tareas, anexos, temas y referencias que estarán incluidos en la planeación',
      component: Content,
    },
    {
      name: 'Recomendaciones',
      description:
        '¿Que recomendaciones tendrán los profesores para sus clases?',
      component: Adaptations,
    },
  ];

  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm);
  const { area: areaId, grade: gradeId } = useParams();

  const submitForm = async () => {
    const response = await service.areaPlan.store(
      setIsLoading,
      areaId,
      areaPlanDataForm
    );

    if (response) {
      window.location.href =
        config.routes.grades.show.path.replace(':grade', gradeId) +
        config.routes.grades.areas.plans.routes.show.path
          .replace(':area', areaId)
          .replace(':plan', response.id);
      return;
    }

    alert('error');
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

  return (
    <div className='flex flex-col gap-6 py-10'>
      <div className='flex justify-between items-start gap-6 relative'>
        <div className='flex max-h-96 flex-col sticky bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between'>
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
      <div className='flex items-end justify-end'>
        {stepActive.index !== steps.length - 1 ? (
          <button
            type='button'
            onClick={() => next()}
            className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
          >
            Siguiente
          </button>
        ) : (
          <button
            type='button'
            onClick={submitForm}
            className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
