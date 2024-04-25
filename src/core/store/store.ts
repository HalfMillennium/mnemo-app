import { configureStore } from "@reduxjs/toolkit";
import namePromptReducer from "./name_prompt/namePromptSlice";
import journalEntriesReducer from "./journal_entries/journalEntriesSlice";

export const store = configureStore({
  reducer: {
    namePrompt: namePromptReducer,
    journalEntries: journalEntriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
