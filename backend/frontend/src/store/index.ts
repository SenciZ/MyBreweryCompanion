import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../reducers/counterReducer'
import helloWorldReducer from '../reducers/helloWorldReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    helloWorld : helloWorldReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch