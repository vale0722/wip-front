import service from 'domain/services/service';

async function store(setIsLoading, area, data) {
  setIsLoading(true);

  try {
    const response = await service.post(`/api/area/${area}/area-plan`, data);
    setIsLoading(false);
    return response.data.status.status === 'OK' ? response.data.data : null;
  } catch (error) {
    setIsLoading(false);
    return {
      errors: error.response.data.errors,
    };
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

async function getCompetences(setIsLoading, area, subject) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/competences`, {
      params: {
        subject_id: subject,
      },
    });
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getTopics(setIsLoading, area, subject) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/topics`, {
      params: {
        subject_id: subject,
      },
    });
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getPerformanceIndicators(setIsLoading, area, subject) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/indicators`, {
      params: {
        subject_id: subject,
      },
    });
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function getObjetives(setIsLoading, area, subject) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan/${area}/objetives`, {
      params: {
        subject_id: subject,
      },
    });
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
