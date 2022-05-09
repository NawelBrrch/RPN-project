import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operators } from "../types";
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
    calculateNumbers: (state, action: PayloadAction<Operators>) => {
      if (state.numbers.length >= 2) {
        const { numbers } = state;
        let newNumber: number = 0;
        switch (action.payload) {
          case "+":
            newNumber = numbers[0] + numbers[1];
            break;
          case "-":
            newNumber = numbers[0] - numbers[1];
            break;
          case "*":
            newNumber = numbers[0] * numbers[1];
            break;
          case "/":
            newNumber = numbers[0] / numbers[1];
            break;
          default:
            break;
        }
        numbers.splice(0, 2);
        numbers.unshift(newNumber);
        state.numbers = numbers;
      }
    },
  },
});

export const { addNumber, deleteAll, calculateNumbers } = rpnSlice.actions;

export const selectNumbers = (state: RootState) => state.rpn.numbers;

export default rpnSlice.reducer;
