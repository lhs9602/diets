// dietSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: '식단 1' },
  { id: 2, name: '식단 2' },
  { id: 3, name: '식단 3' },
  // 초기 식단 데이터
];

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  reducers: {
    addFood: (state, action) => {
      const newFood = {
        id: Date.now(),
        name: action.payload,
      };
      state.push(newFood);
    },
    // 음식 추가 액션
    removeFood: (state, action) => {
      const foodId = action.payload;
      return state.filter((food) => food.id !== foodId);
    },
    // 음식 삭제 액션
  },
});

export const { addFood, removeFood } = dietSlice.actions;
export default dietSlice.reducer;
