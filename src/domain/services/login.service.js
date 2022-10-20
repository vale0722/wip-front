import service from 'domain/services/service';

async function login(setIsLoading, data) {
  setIsLoading(true);
  try {
    const response = await service.post(`/api/login`, data);
    // eslint-disable-next-line no-restricted-globals
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function logout(setIsLoading) {
  setIsLoading(true);
  try {
    const response = await service.post(`/api/logout`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  login,
  logout,
};
