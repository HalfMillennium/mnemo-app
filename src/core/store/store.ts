import { configureStore } from "@reduxjs/toolkit";
import namePromptReducer from "./name_prompt/namePromptSlice";
import journalEntriesSlice from "./journal_entries/journalEntriesSlice";

export const store = configureStore({
  reducer: {
    namePrompt: namePromptReducer,
    journalEntries: journalEntriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
