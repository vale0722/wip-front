import config from 'domain/config';
import TeachersPage from 'presentation/pages/TeachersPage';
import TeacherStorePage from 'presentation/pages/teachers/TeacherStorePage';
import TeacherShowPage from 'presentation/pages/teachers/TeacherShowPage';

export default [
  {
    path: `${config.routes.auth.teachers.path}`,
    key: 'TEACHERS',
    isAuth: true,
    element: TeachersPage,
  },
  {
    path: `${config.routes.teachers.store.path}`,
    key: 'CREATE-TEACHERS',
    isAuth: true,
    element: TeacherStorePage,
  },
  {
    path: `${config.routes.teachers.show.path}`,
    key: 'SHOW-TEACHERS',
    isAuth: true,
    element: TeacherShowPage,
  },
];
