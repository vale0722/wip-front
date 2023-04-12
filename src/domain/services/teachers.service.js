import service from 'domain/services/service';

async function index(setIsLoading) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/teachers`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function show(setIsLoading, teacher) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/teachers/${teacher}`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function store(setIsLoading, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/teachers`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function update(setIsLoading, teacher, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/teachers/${teacher}`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function remove(setIsLoading, teacher) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/teachers/${teacher}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  index,
  show,
  store,
  update,
  remove,
};
