import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import AreaPlanForm from 'presentation/components/molecules/AreaPlanForm';
import { Link, useParams } from 'react-router-dom';
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
    <div className='flex flex-col w-full items-center relative'>
      <Header height='h-full' />
      <div className='z-8 mx-auto w-full px-8 bg-white sticky top-[65px] py-2'>
        <div className='text-sm breadcrumbs capitalize'>
          <ul>
            <li>
              <Link
                to={config.routes.grades.show.path.replace(':grade', gradeId)}
              >
                {areaActive.id ? areaActive.grade.name : ''}
              </Link>
            </li>
            <li>
              <Link
                to={`${config.routes.grades.show.path.replace(
                  ':grade',
                  gradeId
                )}${config.routes.grades.areas.show.path.replace(
                  ':area',
                  areaActive.id
                )}`}
              >
                {areaActive.name}
              </Link>
            </li>
            <li>
              <Link
                to={`${config.routes.grades.show.path.replace(
                  ':grade',
                  gradeId
                )}${config.routes.grades.areas.plans.path.replace(
                  ':area',
                  areaActive.id
                )}`}
              >
                Planes de clase
              </Link>
            </li>
            <li>
              <Link
                to={`${config.routes.grades.show.path.replace(
                  ':grade',
                  gradeId
                )}${config.routes.grades.areas.plans.routes.store.path.replace(
                  ':area',
                  areaActive.id
                )}`}
                className='font-semibold'
              >
                Crear
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container flex flex-col h-full w-full my-4'>
        <span className='text-2xl font-semibold py-6'>
          Crear Plan de Area: {areaActive.name}
        </span>
        <AreaPlanForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
