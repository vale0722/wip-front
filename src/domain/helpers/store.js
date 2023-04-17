import reducer from 'domain/reducers';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.setIsLoading'],
      },
    }),
});
