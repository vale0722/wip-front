import React, { useEffect, useState } from 'react';
import Header from 'presentation/components/atoms/Header';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { useDispatch, useSelector } from 'react-redux';
import { getSubject } from 'domain/reducers/subjects.reducer';
import services from 'domain/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFloppyDisk,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  getAreaCompetences,
  getAreaTopics,
  getPerformanceIndicators,
  getAreaObjetives,
} from 'domain/reducers/area_plan.reducer';
import Competences from 'presentation/components/molecules/tabs/subjects/Competences';
import Objetives from 'presentation/components/molecules/tabs/subjects/Objetives';
import Indicators from 'presentation/components/molecules/tabs/subjects/Indicators';
import Topics from 'presentation/components/molecules/tabs/subjects/Topics';

export default function SubjectShowPage({ setIsLoading }) {
  const { area: areaId, grade: gradeId, subject: subjectId } = useParams();

  const refreshCompetences = () => {
    services.areaPlan
      .getCompetences(setIsLoading, areaId)
      .then((data) => dispatch(getAreaCompetences(data)));
  };

  const refreshObjetives = () => {
    services.areaPlan
      .getObjetives(setIsLoading, areaId)
      .then((data) => dispatch(getAreaObjetives(data)));
  };

  const refreshIndicators = () => {
    services.areaPlan
      .getPerformanceIndicators(setIsLoading, areaId)
      .then((data) => dispatch(getPerformanceIndicators(data)));
  };

  const refreshTopics = () => {
    services.areaPlan
      .getTopics(setIsLoading, areaId)
      .then((data) => dispatch(getAreaTopics(data)));
  };

  const COMPONENTS = {
    competences: {
      name: 'competences',
      component: Competences,
      refresh: refreshCompetences,
    },
    objetives: {
      name: 'objetives',
      component: Objetives,
      refresh: refreshObjetives,
    },
    indicators: {
      name: 'indicators',
      component: Indicators,
      refresh: refreshIndicators,
    },
    topics: {
      name: 'topics',
      component: Topics,
      refresh: refreshTopics,
    },
  };

  const subjectActive = useSelector((state) => state.subject.value);
  const [formActive, setFormActive] = useState(false);
  const [tabActive, setTabActive] = useState(COMPONENTS.competences);
  const [name, setName] = useState(subjectActive.name);
  const dispatch = useDispatch();

  const updateSubject = () => {
    services.subjects
      .update(setIsLoading, subjectId, {
        name,
      })
      .then(() => {
        services.subjects
          .show(setIsLoading, subjectId)
          .then((data) => dispatch(getSubject(data)));
        setFormActive(false);
      });
  };

  useEffect(() => {
    services.subjects
      .show(setIsLoading, subjectId)
      .then((data) => dispatch(getSubject(data)));
    refreshCompetences();
    refreshObjetives();
    refreshIndicators();
    refreshTopics();
  }, [dispatch]);

  return (
    <div className='flex flex-col h-full w-full items-center my-10'>
      <div className='w-full fixed h-full -z-10'>
        <Header height='h-full' />
      </div>
      <main className='py-2 bg-white bg-opacity-30 lg:grid lg:grid-cols-6 gap-6 my-12 w-full px-2 mx-auto'>
        <aside className='col-span-2 flex flex-col gap-6 mx-10 lg:mx-2 mb-2'>
          <div className='bg-white shadow rounded-lg p-4'>
            <div className='flex gap-5 text-center items-center'>
              <div className='h-24 w-24 bg-primary-500 flex text-5xl text-white items-center justify-center p-2 rounded-full shadow'>
                <img
                  className='h-full w-full rounded-full'
                  src={`https://ui-avatars.com/api/?name=${
                    subjectActive.name?.replace(' ', '+') ?? ''
                  }`}
                  alt={subjectActive.name}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-gray-400 text-start text-sm font-semibold'>
                  Asignatura
                </span>
                {!formActive ? (
                  <div className='flex gap-4 items-center justify-between'>
                    <p className='font-semibold'>{subjectActive.name}</p>
                    <button
                      type='button'
                      onClick={() => setFormActive(true)}
                      className='flex items-center p-2 rounded-full text-sm bg-primary-300 hover:bg-primary-500 text-white shadow-lg'
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <a
                      href='#confirm-delete'
                      className='flex items-center cursor-pointer p-2 rounded-full text-sm bg-primary-300 hover:bg-primary-500 text-white shadow-lg'
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </div>
                ) : (
                  <div className='flex gap-4 items-center justify-between'>
                    <input
                      onInput={(e) => {
                        setName(e.target.value);
                        return true;
                      }}
                      defaultValue={subjectActive.name}
                      placeholder='Nombre'
                      className='block form-input !p-2'
                    />
                    <button
                      type='button'
                      onClick={() => updateSubject()}
                      className='flex items-center p-2 rounded-full text-sm bg-primary-300 hover:bg-primary-500 text-white shadow-lg'
                    >
                      <FontAwesomeIcon icon={faFloppyDisk} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='bg-white shadow rounded-lg p-4 flex gap-4 text-start'>
            <div className='flex flex-col gap-2 text-gray-800 font-bold'>
              <span>Area:</span>
              <span>Grado:</span>
            </div>
            <div className='flex flex-col gap-2 capitalize'>
              <span>{subjectActive.area?.name}</span>
              <span>{subjectActive.grade?.name}</span>
            </div>
          </div>
        </aside>
        <article className='col-span-4 mx-10 gap-3'>
          <div className='text-sm breadcrumbs capitalize'>
            <ul>
              <li>
                <Link
                  to={config.routes.grades.show.path.replace(':grade', gradeId)}
                >
                  {subjectActive.grade?.name}
                </Link>
              </li>
              <li>
                <Link
                  to={`${config.routes.grades.show.path.replace(
                    ':grade',
                    gradeId
                  )}${config.routes.grades.areas.show.path.replace(
                    ':area',
                    areaId
                  )}`}
                  className='font-semibold'
                >
                  {subjectActive.area?.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow rounded-lg p-4 w-full'>
            <div className='tabs'>
              <button
                type='button'
                className={`tab tab-lifted ${
                  tabActive.name === 'objetives' ? 'tab-active' : ''
                }`}
                onClick={() => setTabActive(COMPONENTS.objetives)}
              >
                Objetivos
              </button>
              <button
                type='button'
                className={`tab tab-lifted ${
                  tabActive.name === 'competences' ? 'tab-active' : ''
                }`}
                onClick={() => setTabActive(COMPONENTS.competences)}
              >
                Competencias
              </button>
              <button
                type='button'
                className={`tab tab-lifted ${
                  tabActive.name === 'indicators' ? 'tab-active' : ''
                }`}
                onClick={() => setTabActive(COMPONENTS.indicators)}
              >
                Indicadores de desempeño
              </button>
              <button
                type='button'
                className={`tab tab-lifted ${
                  tabActive.name === 'topics' ? 'tab-active' : ''
                }`}
                onClick={() => setTabActive(COMPONENTS.topics)}
              >
                Temas
              </button>
            </div>
            {React.createElement(tabActive.component, {
              setIsLoading,
              refresh: tabActive.refresh,
            })}
          </div>
        </article>
      </main>
    </div>
  );
}
