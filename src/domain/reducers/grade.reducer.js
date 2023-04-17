import { createSlice } from '@reduxjs/toolkit';

export const gradeSlice = createSlice({
  name: 'grade',
  initialState: {
    value: {},
  },
  reducers: {
    getGrade: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data ?? {};
    },
  },
});

export const gradesSlice = createSlice({
  name: 'grades',
  initialState: {
    value: 0,
  },
  reducers: {
    getGrades: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data && payload.data.length ? payload.data : [];
    },
  },
});

export const { getGrades } = gradesSlice.actions;
export const { getGrade} =
  gradeSlice.actions;

export const grades = gradesSlice.reducer;
export const grade = gradeSlice.reducer;
