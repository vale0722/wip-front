import { createSlice } from '@reduxjs/toolkit';

export const SubjectDataFormSlice = createSlice({
  name: 'subject_data_form',
  initialState: {
    value: {
      name: '',
      area_id: null,
      objetives: [],
      competences: [],
      indicators: [],
      topics: [],
    },
  },
  reducers: {
    setName(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.name = action.payload;
    },
    setArea(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.area_id = action.payload;
    },
    setObjetives(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.objetives = action.payload;
    },
    setCompetences(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.competences = action.payload;
    },
    setIndicators(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.indicators = action.payload;
    },
    setTopics(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value.topics = action.payload;
    },
  },
});

export const subjectDataForm = SubjectDataFormSlice.reducer;

export const {
  setName,
  setArea,
  setObjetives,
  setCompetences,
  setIndicators,
  setTopics,
} = SubjectDataFormSlice.actions;
