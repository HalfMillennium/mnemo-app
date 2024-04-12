import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateName } from "../name_prompt/namePromptSlice";

export interface JournalEntry {
  // undefined -> not started, false -> failed, true -> succeeded
  complete: boolean | undefined;
  content: string | undefined;
}

interface JournalEntriesSlice {
  /** Maps prompt query values to journal entry results */
  queries: {
    [name: string]: JournalEntry;
  };
  /** If journal entry is being fetched */
  loading: boolean;
}

export const initialState: JournalEntriesSlice = {
  queries: {},
  loading: false,
};

export interface JournalEntryPayload {
  name: string;
  journalEntry: JournalEntry;
}

const journalEntriesSlice = createSlice({
  name: "journalEntries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournalEntryFromName.pending, (state, action) => {
        // Set entry for query to empty journal entry, as provided in the action
        console.log("Action pending...");
        state.queries[action.meta.arg.name] = action.meta.arg.journalEntry;
        state.loading = true;
      })
      .addCase(
        fetchJournalEntryFromName.fulfilled,
        (state, action: PayloadAction<JournalEntryPayload>) => {
          // Once request has been fulfilled, update state to store new journal entry
          console.log("Action complete!");
          state.queries[action.payload.name] = action.payload.journalEntry;
          state.loading = false;
        }
      )
      .addCase(fetchJournalEntryFromName.rejected, (state, action) => {
        console.log("Action rejected.");
        state.queries[action.meta.arg.name] = {
          complete: true,
          content: "ERROR",
        };
        state.loading = false;
      });
  },
});

export const fetchJournalEntryFromName = createAsyncThunk(
  "journalEntries/fetchJournalEntryFromName",
  async (
    payload: JournalEntryPayload,
    { dispatch }
  ): Promise<JournalEntryPayload> => {
    // Update namePrompt.name in the store
    dispatch(updateName(payload.name));
    // TODO: replace example logic with actual API request
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return {
      name: payload.name,
      journalEntry: {
        complete: true,
        content: `Successful fetch for: '${payload.name}'`,
      },
    };
  }
);

export default journalEntriesSlice.reducer;
