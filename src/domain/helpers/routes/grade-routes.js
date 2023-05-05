import config from 'domain/config';
import GradesShowPage from 'presentation/pages/grades/GradesShowPage';
import AreaShowPage from 'presentation/pages/grades/AreaShowPage';
import AreaPlansPage from 'presentation/pages/grades/AreaPlansPage';
import AreaPlansShowPage from 'presentation/pages/grades/AreaPlansShowPage';
import AreaPlansStorePage from 'presentation/pages/grades/AreaPlansStorePage';
import SubjectStorePage from 'presentation/pages/grades/SubjectStorePage';
import SubjectShowPage from 'presentation/pages/grades/SubjectShowPage';
import AreaPlansCloneShowPage from 'presentation/pages/grades/AreaPlansCloneShowPage';

export default [
  {
    path: `${config.routes.grades.show.path}`,
    key: 'GRADES_SHOW',
    isAuth: true,
    element: GradesShowPage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.show.path}`,
    key: 'AREA_SHOW',
    isAuth: true,
    element: AreaShowPage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.plans.path}`,
    key: 'AREA_PLANS',
    isAuth: true,
    element: AreaPlansPage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.subjects.routes.store.path}`,
    key: 'SUBJECTS_STORE',
    isAuth: true,
    element: SubjectStorePage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.subjects.routes.show.path}`,
    key: 'SUBJECTS_SHOW',
    isAuth: true,
    element: SubjectShowPage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.plans.routes.store.path}`,
    key: 'AREA_PLANS_STORE',
    isAuth: true,
    element: AreaPlansStorePage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.plans.routes.show.path}`,
    key: 'AREA_PLANS_SHOW',
    isAuth: true,
    element: AreaPlansShowPage,
  },
  {
    path: `${config.routes.grades.show.path}${config.routes.grades.areas.plans.routes.clones.routes.show.path}`,
    key: 'AREA_PLAN_CLONES_SHOW',
    isAuth: true,
    element: AreaPlansCloneShowPage,
  },
];
