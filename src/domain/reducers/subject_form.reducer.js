import { createSlice } from '@reduxjs/toolkit';

export const SubjectDataFormSlice = createSlice({
  name: 'subject_data_form',
  initialState: {
    value: {
      name: '',
      code: '',
      competences: [],
      indicators: [],
      topics: [],
    },
  },
  reducers: {},
});

export const subjectDataForm = SubjectDataFormSlice.reducer;
