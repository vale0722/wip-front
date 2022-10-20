import services from 'domain/services';

const initialState = [];

export function storeAreaPlan(data) {
  return async function action(dispatch) {
    dispatch({
      type: 'area_plan',
      payload: await services.areaPlan.store(data),
    });
  };
}

export function getAreaPlans(data, grade, area) {
  return async function action(dispatch) {
    dispatch({
      type: 'area_plan/index',
      payload: (await services.areaPlan.index(data, grade, area)).data ?? [],
    });
  };
}

export function getAreaPlan(data, plan) {
  return async function action(dispatch) {
    dispatch({
      type: 'area_plan',
      payload: (await services.areaPlan.show(data, plan)) ?? {},
    });
  };
}

export function getAreaCompetences(setIsLoading, plan) {
  return async function action(dispatch) {
    dispatch({
      type: 'competences',
      payload:
        (await services.areaPlan.getCompetences(setIsLoading, plan)) ?? [],
    });
  };
}

export function getAreaTopics(setIsLoading, plan) {
  return async function action(dispatch) {
    dispatch({
      type: 'topics',
      payload: (await services.areaPlan.getTopics(setIsLoading, plan)) ?? [],
    });
  };
}

export function getPerformanceIndicators(setIsLoading, plan) {
  return async function action(dispatch) {
    dispatch({
      type: 'indicators',
      payload:
        (await services.areaPlan.getPerformanceIndicators(
          setIsLoading,
          plan
        )) ?? [],
    });
  };
}

export function areaPlan(state = initialState, action = initialState) {
  switch (action.type) {
    case 'area_plan/index':
    case 'area_plan':
      return action.payload;
    default:
      return state;
  }
}

export function areaCompetences(state = initialState, action = initialState) {
  switch (action.type) {
    case 'competences':
      return action.payload;
    default:
      return state;
  }
}

export function performanceIndicators(
  state = initialState,
  action = initialState
) {
  switch (action.type) {
    case 'indicators':
      return action.payload;
    default:
      return state;
  }
}

export function areaTopics(state = initialState, action = initialState) {
  switch (action.type) {
    case 'topics':
      return action.payload;
    default:
      return state;
  }
}
