import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HelloState {
    value: string
  }
  
  const initialState: HelloState = {
    value:'Hello World',
  }

  export const helloSlice = createSlice({
    name: 'hello',
    initialState,
    reducers: {
      change: (state, action: PayloadAction<string>) => {
        state.value = action.payload
      },
    },
  })
  
  export const { change } = helloSlice.actions
  
  export default helloSlice.reducer