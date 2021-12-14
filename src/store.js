import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './componets/Card/cardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});