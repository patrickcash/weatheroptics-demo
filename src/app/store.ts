import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from '../features/forecasts/forecastSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
