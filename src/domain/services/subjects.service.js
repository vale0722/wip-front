import service from 'domain/services/service';

async function index(setIsLoading, grade) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/grades/${grade}/subjects`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function store(setIsLoading, grade, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/grades/${grade}/subjects`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  index,
  store,
};
