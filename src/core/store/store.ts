import { configureStore } from "@reduxjs/toolkit";
import namePromptReducer from "./name_prompt/namePromptSlice";

export const store = configureStore({
  reducer: {
    namePrompt: namePromptReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
