// exerciseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: '운동 1' },
  { id: 2, name: '운동 2' },
  { id: 3, name: '운동 3' },
  // 초기 운동 데이터
];

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      const newExercise = {
        id: Date.now(),
        name: action.payload,
      };
      state.push(newExercise);
    },
    // 운동 추가 액션
    removeExercise: (state, action) => {
      const exerciseId = action.payload;
      return state.filter((exercise) => exercise.id !== exerciseId);
    },
    // 운동 삭제 액션
  },
});

export const { addExercise, removeExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
