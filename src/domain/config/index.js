import routes from 'domain/config/routes';

export default {
  app_name: process.env.REACT_APP_NAME,
  initial_date: process.env.REACT_APP_INITIAL_DATE,
  statics: process.env.REACT_APP_CV_STATICS,
  routes,
};
