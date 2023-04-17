import { createSlice } from '@reduxjs/toolkit';

export const groupsSlice = createSlice({
  name: 'groups',
  initialState: {
    value: [],
  },
  reducers: {
    getGroups: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload.data && payload.data.length ? payload.data : [];
    },
  },
});

export const { getGroups } = groupsSlice.actions;
export const groups = groupsSlice.reducer;
