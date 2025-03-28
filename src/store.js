import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioReducer';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
  // Adding middleware to log actions in development
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific action types with non-serializable data if needed
        ignoredActions: [],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;