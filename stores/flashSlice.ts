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
      action: PayloadAction<{ message: string, type?: FlashType, id: number }>
    ) => {
      state.push({
        id: action.payload.id,
        message: action.payload.message,
        type: action.payload.type ? action.payload.type : 'success',
        visible: true
      })
    },
    remove: (
      state,
      action: PayloadAction<{id: number}>
    ) => {
      return state.filter((flash) => {
        return flash.id !== action.payload.id
      })
    }
  }
})

export const {add, remove} = flashSlice.actions
export const flashReducer = flashSlice.reducer