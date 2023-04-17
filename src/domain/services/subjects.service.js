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

export default {
  index,
};
