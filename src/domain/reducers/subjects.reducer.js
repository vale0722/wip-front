import { createSlice } from '@reduxjs/toolkit';

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState: {
    value: [],
  },
  reducers: {
    getSubjects: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data && payload.data.length ? payload.data : [];
    },
  },
});

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: {
    value: {},
  },
  reducers: {
    getSubject: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data ?? {};
    },
  },
});

export const { getSubjects } = subjectsSlice.actions;
export const subjects = subjectsSlice.reducer;

export const { getSubject } = subjectSlice.actions;
export const subject = subjectSlice.reducer;
