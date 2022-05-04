import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import rpnReducer from "./rpnSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rpn: rpnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
