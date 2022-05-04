import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterState {
  numbers: number[];
}

const initialState: CounterState = {
  numbers: [],
};

export const rpnSlice = createSlice({
  name: "rpn",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      state.numbers.push(action.payload);
    },
    deleteAll: (state) => {
      state.numbers = [];
    },
    add: (state) => {
      if (state.numbers.length >= 2) {
        const numbers = state.numbers;
        const newNumber = state.numbers[0] + state.numbers[1];
        numbers.splice(0, 2);
        numbers.unshift(newNumber);
        state.numbers = numbers;
      }
    },
    minus: (state) => {
      if (state.numbers.length >= 2) {
        const numbers = state.numbers;
        const newNumber = state.numbers[0] - state.numbers[1];
        numbers.splice(0, 2);
        numbers.unshift(newNumber);
        state.numbers = numbers;
      }
    },
    divide: (state) => {
      if (state.numbers.length >= 2) {
        const numbers = state.numbers;
        const newNumber = state.numbers[0] / state.numbers[1];
        numbers.splice(0, 2);
        numbers.unshift(newNumber);
        state.numbers = numbers;
      }
    },
    multiply: (state) => {
      if (state.numbers.length >= 2) {
        const numbers = state.numbers;
        const newNumber = state.numbers[0] * state.numbers[1];
        numbers.splice(0, 2);
        numbers.unshift(newNumber);
        state.numbers = numbers;
      }
    },
  },
});

export const { addNumber, deleteAll, add, minus, divide, multiply } =
  rpnSlice.actions;

/* export const incrementByAmountAsync =
  (amount: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  }; */

export const selectNumbers = (state: RootState) => state.rpn.numbers;

export default rpnSlice.reducer;
