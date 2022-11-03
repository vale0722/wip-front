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
};
