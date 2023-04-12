import service from 'domain/services/service';

async function index(setIsLoading) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/groups`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    sessionStorage.removeItem('loggedUser');
    window.location.reload();
    setIsLoading(false);
    return {};
  }
}

export default {
  index,
};
