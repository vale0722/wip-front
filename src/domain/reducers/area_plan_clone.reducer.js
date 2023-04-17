import { createSlice } from '@reduxjs/toolkit';

export const areaPlanCloneSlice = createSlice({
  name: 'area_plan_clone',
  initialState: {
    value: [],
  },
  reducers: {
    getAreaPlanClone: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = payload ?? {};
    },
  },
});

export const { getAreaPlanClone } = areaPlanCloneSlice.actions;
export const areaPlanClone = areaPlanCloneSlice.reducer;