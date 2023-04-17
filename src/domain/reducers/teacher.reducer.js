import { createSlice } from '@reduxjs/toolkit';

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    value: [],
  },
  reducers: {
    getTeachers: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data && payload.data.length ? payload.data : [];
    },
  },
});

export const { getTeachers } = teachersSlice.actions;
export const teachers = teachersSlice.reducer;

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    value: {},
  },
  reducers: {
    getTeacher: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data ?? {};
    },
  },
});

export const { getTeacher } = teacherSlice.actions;
export const teacher = teacherSlice.reducer;