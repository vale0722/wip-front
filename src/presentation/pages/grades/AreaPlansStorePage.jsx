import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import AreaPlanForm from 'presentation/components/molecules/AreaPlanForm';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import {
  getAreaCompetences,
  getAreaTopics,
  getPerformanceIndicators,
} from 'domain/reducers/area_plan.reducer';
import { getArea } from 'domain/reducers/area.reducer';

export default function AreaPlansStorePage({ setIsLoading }) {
  const { area: areaId } = useParams();
  const areaActive = useSelector((state) => state.area);

  useEffect(() => {
    store.dispatch(getArea(setIsLoading, areaId));
    store.dispatch(getAreaCompetences(setIsLoading, areaId));
    store.dispatch(getPerformanceIndicators(setIsLoading, areaId));
    store.dispatch(getAreaTopics(setIsLoading, areaId));
  }, []);

  return (
    <div className='flex flex-col w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <div className='flex gap-3 text-sm'>
          <Link to={`${config.routes.grades.show.path.replace(':grade', 1)}`}>
            Primero
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(
                ':grade',
                areaActive.grade
              ) + config.routes.grades.areas.show.path.replace(':area', 1)
            }`}
          >
            Leer, Escribir, Crear
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(
                ':grade',
                areaActive.grade
              ) +
              config.routes.grades.areas.plans.path.replace(
                ':area',
                areaActive.code
              )
            }`}
          >
            Planes de clase
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(
                ':grade',
                areaActive.grade
              ) +
              config.routes.grades.areas.plans.routes.store.path.replace(
                ':area',
                areaActive.code
              )
            }`}
            className='font-semibold'
          >
            Crear
          </Link>
        </div>
        <span className='text-2xl font-semibold py-6'>
          Crear Plan de Area: {areaActive.name}
        </span>
        <AreaPlanForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
