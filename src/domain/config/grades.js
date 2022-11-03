module.exports = {
  show: {
    path: '/grades/:grade',
    title: 'Grado',
  },
  areas: {
    show: {
      path: '/areas/:area',
      title: 'Area',
    },
    plans: {
      path: '/areas/:area/plans',
      title: 'Planes de clase',
      routes: {
        store: {
          path: '/areas/:area/plans-create',
          title: 'Crear Planes de clase',
        },
        show: {
          path: '/areas/:area/plans/:plan',
          title: 'Plan',
        },
        clones: {
          title: 'Plan Clones',
          routes: {
            show: {
              path: '/areas/:area/plans/:plan/clone/:clone',
              title: 'Clone',
            },
          },
        },
      },
    },
  },
};
