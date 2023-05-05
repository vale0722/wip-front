import service from 'domain/services/service';

async function show(setIsLoading, subjectId) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/subjects/${subjectId}`);
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

async function remove(setIsLoading, subjectId) {
  setIsLoading(true);

  try {
    const response = await service.delete(`/api/subjects/${subjectId}`);
    setIsLoading(false);
    return { status: response.data.status.status };
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function update(setIsLoading, subjectId, data) {
  setIsLoading(true);

  try {
    const response = await service.patch(`/api/subjects/${subjectId}`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  store,
  update,
  show,
  remove,
};
