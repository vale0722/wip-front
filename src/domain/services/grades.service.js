import service from 'domain/services/service';

async function index(setIsLoading) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/grades`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    sessionStorage.removeItem('loggedUser');
    window.location.reload();
    setIsLoading(false);
    return {};
  }
}

async function show(setIsLoading, grade) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/grades/${grade}`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  index,
  show,
};
