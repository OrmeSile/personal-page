import {createSlice} from "@reduxjs/toolkit";

const initialState = {hidden: false}
const overflowSlice = createSlice({
  name: 'overflow',
  initialState,
  reducers: {
    toggle: (state)=>{
      state.hidden = !state.hidden
    },
    set: (state,  action) => {
      state.hidden = action.payload
    }
  }
})

export const {toggle, set} = overflowSlice.actions
export const overflowReducer = overflowSlice.reducer