import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import AreaPlanForm from 'presentation/components/molecules/AreaPlanForm';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from 'domain/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAreaCompetences,
  getAreaTopics,
  getPerformanceIndicators,
} from 'domain/reducers/area_plan.reducer';
import { getArea } from 'domain/reducers/area.reducer';
import services from 'domain/services';

export default function AreaPlansStorePage({ setIsLoading }) {
  const { area: areaId, grade: gradeId } = useParams();
  const areaActive = useSelector((state) => state.area.value);

  const dispatch = useDispatch();
  useEffect(() => {
    services.area
      .show(setIsLoading, areaId)
      .then((data) => dispatch(getArea(data)));
    services.areaPlan
      .getCompetences(setIsLoading, areaId)
      .then((data) => dispatch(getAreaCompetences(data)));
    services.areaPlan
      .getPerformanceIndicators(setIsLoading, areaId)
      .then((data) => dispatch(getPerformanceIndicators(data)));
    services.areaPlan
      .getTopics(setIsLoading, areaId)
      .then((data) => dispatch(getAreaTopics(data)));
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full items-center'>
      <Header height='h-32' />
      <div className='container flex flex-col h-full w-full my-4'>
        <div className='flex gap-3 text-sm'>
          <Link to={config.routes.grades.show.path.replace(':grade', gradeId)}>
            {areaActive.id ? areaActive.grade.name : ''}
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(':grade', gradeId) +
              config.routes.grades.areas.show.path.replace(':area', areaId)
            }`}
          >
            Leer, Escribir, Crear
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(':grade', gradeId) +
              config.routes.grades.areas.plans.path.replace(':area', areaId)
            }`}
          >
            Planes de clase
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            to={`${
              config.routes.grades.show.path.replace(':grade', gradeId) +
              config.routes.grades.areas.plans.routes.store.path.replace(
                ':area',
                areaId
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
