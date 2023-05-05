import { createSlice } from '@reduxjs/toolkit';

export const areaPlanSlice = createSlice({
  name: 'area_plan',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaPlan: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? {};
    },
  },
});

export const { getAreaPlan } = areaPlanSlice.actions;
export const areaPlan = areaPlanSlice.reducer;

export const areaPlansSlice = createSlice({
  name: 'area_plans',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaPlans: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data ?? [];
    },
  },
});

export const { getAreaPlans } = areaPlansSlice.actions;
export const areaPlans = areaPlansSlice.reducer;

export const areaCompetencesSlice = createSlice({
  name: 'area_competences',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaCompetences: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? [];
    },
  },
});

export const { getAreaCompetences } = areaCompetencesSlice.actions;
export const areaCompetences = areaCompetencesSlice.reducer;

export const areaTopicsSlice = createSlice({
  name: 'area_topics',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaTopics: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? [];
    },
  },
});

export const { getAreaTopics } = areaTopicsSlice.actions;
export const areaTopics = areaTopicsSlice.reducer;

export const performanceIndicatorsSlice = createSlice({
  name: 'performance_indicators',
  initialState: {
    value: [],
  },
  reducers: {
    getPerformanceIndicators: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? [];
    },
  },
});

export const { getPerformanceIndicators } = performanceIndicatorsSlice.actions;
export const performanceIndicators = performanceIndicatorsSlice.reducer;

export const areaObjetivesSlice = createSlice({
  name: 'area_objetives',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaObjetives: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? [];
    },
  },
});

export const { getAreaObjetives } = areaObjetivesSlice.actions;
export const areaObjetives = areaObjetivesSlice.reducer;
