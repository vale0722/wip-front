import React, { useEffect } from 'react';
import Header from 'presentation/components/atoms/Header';
import SubjectForm from 'presentation/components/molecules/SubjectForm';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useDispatch, useSelector } from 'react-redux';
import { getArea } from 'domain/reducers/area.reducer';
import services from 'domain/services';
import { setArea } from 'domain/reducers/subject_form.reducer';

export default function SubjectStorePage({ setIsLoading }) {
  const { area: areaId, grade: gradeId } = useParams();
  const areaActive = useSelector((state) => state.area.value);

  const dispatch = useDispatch();
  dispatch(setArea(areaId));

  useEffect(() => {
    services.area
      .show(setIsLoading, areaId)
      .then((data) => dispatch(getArea(data)));
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full items-center'>
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
                )}${config.routes.grades.areas.subjects.routes.store.path.replace(
                  ':area',
                  areaActive.id
                )}`}
                className='font-semibold'
              >
                Crear Asignatura
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container flex flex-col h-full w-full my-4'>
        <span className='text-2xl font-semibold py-2 px-8 md:px-0'>
          Crear Asignatura: {areaActive.name}
        </span>
        <SubjectForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
