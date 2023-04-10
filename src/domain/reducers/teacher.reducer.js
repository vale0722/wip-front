import services from 'domain/services';

const initialState = [];

export function getTeachers(setIsLoading) {
  return async function action(dispatch) {
    const data = await services.teachers.index(setIsLoading);
    dispatch({
      type: 'teachers/index',
      payload: data.data && data.data.length ? data.data : initialState,
    });
  };
}

export function getTeacher(setIsLoading, teacherId) {
  return async function action(dispatch) {
    const data = await services.teachers.show(setIsLoading, teacherId);
    dispatch({
      type: 'teachers',
      payload: data.data ?? initialState,
    });
  };
}

export function storeTeacherForm(data) {
  return async function action(dispatch) {
    dispatch({
      type: 'teachers',
      payload: services.teachers.store(data),
    });
  };
}

export function teacher(state = initialState, action = initialState) {
  switch (action.type) {
    case 'teachers':
      return action.payload;
    default:
      return state;
  }
}

export function teachers(state = initialState, action = initialState) {
  switch (action.type) {
    case 'teachers/index':
      return action.payload;
    default:
      return state;
  }
}
