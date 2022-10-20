const initialState = {
  name: '',
  week: '',
  area_id: null,
  initial_date: '',
  end_date: '',
  question: '',
  orientations: [],
  adaptations: [],
  performance_indicators: [],
  performance_competences: [],
  activities: [],
  tasks: [],
  annexes: [],
  references: [],
  recommendations: [],
  activiesPlanCreative: [],
  performance_topics: [],
};

export function areaPlanDataForm(state = initialState, action = initialState) {
  switch (action.type) {
    case 'area_plan_data':
      return action.payload;
    default:
      return state;
  }
}
