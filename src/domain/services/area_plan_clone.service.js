import service from 'domain/services/service';

async function show(setIsLoading, clone) {
  setIsLoading(true);

  try {
    const response = await service.get(`/api/area-plan-clones/${clone}`);
    setIsLoading(false);
    return response.data.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function resolveTask(setIsLoading, task) {
  setIsLoading(true);

  try {
    const response = await service.patch(`/api/check-task/${task}`);
    setIsLoading(false);
    return response;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function resolveActivity(setIsLoading, activity) {
  setIsLoading(true);

  try {
    const response = await service.patch(`/api/check-activity/${activity}`);
    setIsLoading(false);
    return response;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function updateActivityAgent(setIsLoading, activity, data) {
  setIsLoading(true);

  try {
    const response = await service.patch(
      `/api/area-plan-clone/creative-agenda/${activity}`,
      data
    );
    setIsLoading(false);
    return response;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  show,
  resolveActivity,
  resolveTask,
  updateActivityAgent,
};
