import {createSlice} from "@reduxjs/toolkit";

const initialState = {visible: false}
const overflowSlice = createSlice({
  name: 'overflow',
  initialState,
  reducers: {
    toggle: (state)=>{
      state.visible = !state.visible
    },
    set: (state,  action) => {
      state.visible = action.payload
    }
  }
})

export const {toggle, set} = overflowSlice.actions
export const overflowReducer = overflowSlice.reducer