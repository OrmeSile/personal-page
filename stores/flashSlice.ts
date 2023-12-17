'use client'

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FlashState {
  value: string | undefined
  type: FlashType,
  visible: boolean
}

const initialState: FlashState = {
  value: undefined,
  type: "info",
  visible: false
}

const flashSlice = createSlice({
  name: 'flash',
  initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<{ message: string | undefined, type: FlashType, visible: boolean}>
    ) => {
      state.value = action.payload.message
      state.type = action.payload.type
      state.visible = action.payload.visible
    }
  }
})

export const {show} = flashSlice.actions
export const flashReducer = flashSlice.reducer