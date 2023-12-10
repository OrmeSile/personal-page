import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "@/stores/themeSlice";

export const themeStore = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof themeStore.getState>
export type AppDispatch = typeof themeStore.dispatch