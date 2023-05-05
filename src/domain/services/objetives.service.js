import service from 'domain/services/service';

async function remove(setIsLoading, objetive) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/objetives/${objetive}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function update(setIsLoading, objetive, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/objetives/${objetive}`, data);
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
    const response = await service.post(`/api/objetives`, data);
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
