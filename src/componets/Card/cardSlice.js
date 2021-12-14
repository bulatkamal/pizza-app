import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload);
    },
    decrement: (state, action) => {
      const pizza = action.payload;
      
      state.value = state.value.filter((item)=> item.id !== pizza.id);//

    }
  },
});

export const { increment, decrement  } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;