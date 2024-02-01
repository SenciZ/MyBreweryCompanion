import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HelloState {
    value: [];
    isLoading: boolean;
  }
  
  const initialState: HelloState = {
    value: [],
    isLoading: false,
  }

  export const helloSlice = createSlice({
    name: 'hello',
    initialState,
    reducers: {
      change: (state, action: PayloadAction<[]>) => {
        state.value = action.payload
      },
      changeLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
      },
    },
  })
  
  export const { change, changeLoading } = helloSlice.actions
  
  export default helloSlice.reducer