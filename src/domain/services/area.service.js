import service from 'domain/services/service';

async function show(setIsLoading, areaId) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/areas/${areaId}`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function store(setIsLoading, gradeId, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/grades/${gradeId}/areas`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function update(setIsLoading, gradeId, areaId, data) {
  setIsLoading(true);

  try {
    const response = await service.patch(
      `/api/grades/${gradeId}/areas/${areaId}`,
      data
    );
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function remove(setIsLoading, gradeId, areaId) {
  setIsLoading(true);

  try {
    const response = await service.delete(
      `/api/grades/${gradeId}/areas/${areaId}`
    );
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function clone(setIsLoading, planId) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/area-plan-clone/${planId}`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  show,
  clone,
  store,
  update,
  remove,
};
