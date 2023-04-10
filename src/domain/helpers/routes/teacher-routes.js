import config from 'domain/config';
import TeachersPage from 'presentation/pages/TeachersPage';
import TeacherStorePage from 'presentation/pages/teachers/TeacherStorePage';

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
];
