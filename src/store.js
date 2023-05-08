// store.js
import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './slice/exerciseSlice';
import dietReducer from './slice/dietSlice';

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    diet: dietReducer,
  },
});

export default store;
