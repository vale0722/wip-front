import services from 'domain/services';

const initialState = [];

export function getAreaPlanClone(data, clone) {
  return async function action(dispatch) {
    dispatch({
      type: 'area_plan_clone',
      payload: (await services.areaPlanClone.show(data, clone)) ?? {},
    });
  };
}

export function areaPlanClone(state = initialState, action = initialState) {
  switch (action.type) {
    case 'area_plan_clone':
      return action.payload;
    default:
      return state;
  }
}
