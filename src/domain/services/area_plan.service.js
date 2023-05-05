import service from 'domain/services/service';

async function store(setIsLoading, area, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/area/${area}/area-plan`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function show(setIsLoading, areaPlan) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${areaPlan}`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function index(setIsLoading, grade, area) {
  setIsLoading(true);

  try {
    const response = await service.get(
      `/api/grades/${grade}/areas/${area}/area-plan`
    );
    setIsLoading(false);
    return response.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getCompetences(setIsLoading, area) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/competences`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getTopics(setIsLoading, area) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/topics`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getPerformanceIndicators(setIsLoading, area) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/indicators`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getObjetives(setIsLoading, area) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/objetives`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  store,
  index,
  show,
  getCompetences,
  getTopics,
  getPerformanceIndicators,
  getObjetives,
};
