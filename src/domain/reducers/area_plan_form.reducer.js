import { createSlice } from '@reduxjs/toolkit';

export const areaPlanDataFormSlice = createSlice({
  name: 'area_plan_data',
  initialState: {
    value: {
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
    },
  },
  reducers: {},
});

export const areaPlanDataForm = areaPlanDataFormSlice.reducer;
