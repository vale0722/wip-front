import services from 'domain/services';

const initialState = {};

export function getArea(setIsLoading, areaId) {
  return async function action(dispatch) {
    const data = await services.area.show(setIsLoading, areaId);
    dispatch({
      type: 'area',
      payload: data.data ?? initialState,
    });
  };
}

export function area(state = initialState, action = initialState) {
  switch (action.type) {
    case 'area':
      return action.payload;
    default:
      return state;
  }
}
