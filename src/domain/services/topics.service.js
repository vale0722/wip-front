import service from 'domain/services/service';

async function remove(setIsLoading, topic) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/topics/${topic}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function update(setIsLoading, topic, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/topics/${topic}`, data);
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
    const response = await service.post(`/api/topics`, data);
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
