import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HelloState {
    value: []
  }
  
  const initialState: HelloState = {
    value: []
  }

  export const helloSlice = createSlice({
    name: 'hello',
    initialState,
    reducers: {
      change: (state, action: PayloadAction<[]>) => {
        state.value = action.payload
      },
    },
  })
  
  export const { change } = helloSlice.actions
  
  export default helloSlice.reducer