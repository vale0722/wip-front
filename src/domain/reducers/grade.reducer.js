import services from 'domain/services';

const initialState = [];

export function getGrades(setIsLoading) {
  return async function action(dispatch) {
    const data = await services.grades.index(setIsLoading);
    dispatch({
      type: 'grades/index',
      payload: data.data && data.data.length ? data.data : initialState,
    });
  };
}

export function getGrade(setIsLoading, gradeId) {
  return async function action(dispatch) {
    const data = await services.grades.show(setIsLoading, gradeId);
    dispatch({
      type: 'grades',
      payload: data.data ?? initialState,
    });
  };
}

export function storeAreaPlanForm(data) {
  return async function action(dispatch) {
    dispatch({
      type: 'grades',
      payload: services.grades.store(data),
    });
  };
}

export function refreshAreaPlanForm(data) {
  return async function action(dispatch) {
    dispatch({
      type: 'grades',
      payload: services.grades.remove(data),
    });
  };
}

export function grade(state = initialState, action = initialState) {
  switch (action.type) {
    case 'grades':
      return action.payload;
    default:
      return state;
  }
}

export function grades(state = initialState, action = initialState) {
  switch (action.type) {
    case 'grades/index':
      return action.payload;
    default:
      return state;
  }
}
