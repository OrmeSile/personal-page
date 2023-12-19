'use client'

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FlashState {
  id: number
  message: string
  type: FlashType
  visible: boolean
}

const initialState: FlashState[] = []

const flashSlice = createSlice({
  name: 'flash',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ message: string, type?: FlashType }>
    ) => {
      state.push({
        id: state.length,
        message: action.payload.message,
        type: action.payload.type ? action.payload.type : 'success',
        visible: true
      })
    },
    remove: (
      _state
    ) => {
    }
  }
})

export const {add} = flashSlice.actions
export const flashReducer = flashSlice.reducer