import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/recipeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})