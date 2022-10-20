const grades = require('domain/config/grades');

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
  login: {
    path: '/login',
    title: 'Iniciar Sesión',
  },
};
