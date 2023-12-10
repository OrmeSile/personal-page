'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DispatchProp} from "react-redux";

export interface ThemeState {
  value: 'light' | 'dark' | string
}

const initialState: ThemeState = {
  value: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    switchTheme: (state) => {
      const newValue = state.value === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('color-mode', newValue)
      state.value = newValue
    },
  }
})

export const {switchTheme, init} = themeSlice.actions
export const themeReducer = themeSlice.reducer
