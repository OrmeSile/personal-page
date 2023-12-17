import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "@/stores/themeSlice";
import {flashReducer} from "@/stores/flashSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    flash: flashReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch