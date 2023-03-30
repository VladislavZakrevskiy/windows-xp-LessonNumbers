import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  flag: false,
  plot: ''
}

const plotSlice = createSlice({
  name: 'plot',
  initialState,
  reducers: {
    startStop: (state, action) => {
      state.flag = action.payload
    },

    selectPlot: (state, action) => {
      state.plot = action.payload
    }

  },
});

export const { startStop, selectPlot } = plotSlice.actions
export default plotSlice.reducer;