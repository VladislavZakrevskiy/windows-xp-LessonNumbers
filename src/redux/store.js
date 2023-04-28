import { configureStore, combineReducers } from '@reduxjs/toolkit';
import plotSlice from './reducers/PlotSlice'

const reducer = combineReducers({
    plotSlice
})

const store = configureStore({
  reducer: reducer
});

export default store;