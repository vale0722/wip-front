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
      activiesPlanCreative: [],
      performance_topics: [],
    },
  },
  reducers: {
    setName(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.name = action.payload;
    },
    setWeek(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.week = action.payload;
    },
    setAreaId(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.area_id = action.payload;
    },
    setInitialDate(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.initial_date = action.payload;
    },
    setEndDate(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.end_date = action.payload;
    },
    setQuestion(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.question = action.payload;
    },
    setOrientations(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.orientations = action.payload;
    },
    setAdaptations(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.adaptations = action.payload;
    },
    setPerformanceIndicators(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.performance_indicators = action.payload;
    },
    setPerformanceCompetences(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.performance_competences = action.payload;
    },
    setActivities(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.activities = action.payload;
    },
    setTasks(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.tasks = action.payload;
    },
    setAnnexes(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.annexes = action.payload;
    },
    setReferences(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.references = action.payload;
    },
    setActiviesPlanCreative(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.activiesPlanCreative = action.payload;
    },
    setPerformanceTopics(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.performance_topics = action.payload;
    },
  },
});

export const areaPlanDataForm = areaPlanDataFormSlice.reducer;

export const {
  setName,
  setWeek,
  setInitialDate,
  setEndDate,
  setQuestion,
  setOrientations,
  setAdaptations,
  setPerformanceIndicators,
  setPerformanceCompetences,
  setActivities,
  setTasks,
  setAnnexes,
  setReferences,
  setActiviesPlanCreative,
  setPerformanceTopics,
} = areaPlanDataFormSlice.actions;
