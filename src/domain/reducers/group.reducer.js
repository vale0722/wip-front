import services from 'domain/services';

const initialState = [];

export function getGroups(setIsLoading) {
  return async function action(dispatch) {
    const data = await services.groups.index(setIsLoading);
    dispatch({
      type: 'groups/index',
      payload: data.data && data.data.length ? data.data : initialState,
    });
  };
}

export function groups(state = initialState, action = initialState) {
  switch (action.type) {
    case 'groups/index':
      return action.payload;
    default:
      return state;
  }
}
