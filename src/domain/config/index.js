import routes from 'domain/config/routes';

export default {
  app_name: process.env.REACT_APP_NAME,
  initial_date: process.env.REACT_APP_INITIAL_DATE,
  statics: process.env.REACT_APP_STATICS,
  api_url: process.env.REACT_APP_API_URL,
  routes,
};
