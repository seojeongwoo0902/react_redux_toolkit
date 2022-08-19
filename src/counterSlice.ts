import { createSlice } from "@reduxjs/toolkit";

type Action = {
  type: string;
  payload: number;
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action: Action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
