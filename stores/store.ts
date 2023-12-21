import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "@/stores/themeSlice";
import {flashReducer} from "@/stores/flashSlice";
import {overflowReducer} from "@/stores/overflowSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    flash: flashReducer,
    overflow: overflowReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch