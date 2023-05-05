import service from 'domain/services/service';

async function remove(setIsLoading, competence) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/competences/${competence}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function update(setIsLoading, competence, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/competences/${competence}`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function store(setIsLoading, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/competences`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  remove,
  update,
  store,
};
