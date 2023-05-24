import axios from 'axios';
import config from 'domain/config';
import { getUser } from 'domain/helpers/storage';

const user = getUser();

const service = axios.create({
  baseURL: `${config.api_url}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    Authorization: user ? `${user.token_type} ${user.access_token}` : '',
  },
});

export default service;
