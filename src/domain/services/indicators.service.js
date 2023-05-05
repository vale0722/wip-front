import service from 'domain/services/service';

async function remove(setIsLoading, indicator) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/indicators/${indicator}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function update(setIsLoading, indicator, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/indicators/${indicator}`, data);
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
    const response = await service.post(`/api/indicators`, data);
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
