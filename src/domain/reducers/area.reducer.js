import { createSlice } from '@reduxjs/toolkit';

export const areaSlice = createSlice({
  name: 'area',
  initialState: {
    value: [],
  },
  reducers: {
    getArea: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload?.data ?? [];
    },
  },
});

export const { getArea } = areaSlice.actions;
export const area = areaSlice.reducer;
