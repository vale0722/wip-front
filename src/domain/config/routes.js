const grades = require('domain/config/grades');
const teachers = require('domain/config/teachers');

module.exports = {
  auth: {
    dashboard: {
      path: '/',
      title: 'Inicio',
    },
    'my-plans': {
      path: '/my-plans',
      title: 'Mis Planes',
    },
    teachers: {
      path: '/teachers',
      title: 'Profesores',
    },
  },
  grades,
  teachers,
  login: {
    path: '/login',
    title: 'Iniciar Sesión',
  },
};
