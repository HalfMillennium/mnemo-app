import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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
}

const initialState: JournalEntriesSlice = {
  queries: {},
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
      })
      .addCase(
        fetchJournalEntryFromName.fulfilled,
        (state, action: PayloadAction<JournalEntryPayload>) => {
          // Once request has been fulfilled, update state to store new journal entry
          console.log("Action complete!");
          state.queries[action.payload.name] = action.payload.journalEntry;
        }
      )
      .addCase(fetchJournalEntryFromName.rejected, (state, action) => {
        state.queries[action.meta.arg.name] = {
          complete: true,
          content: "ERROR",
        };
      });
  },
});

export const fetchJournalEntryFromName = createAsyncThunk(
  "namePrompt/fetchJournalEntryFromName",
  async (payload: JournalEntryPayload): Promise<JournalEntryPayload> => {
    // TODO: replace example logic with actual API request
    const dispatch = useDispatch();
    dispatch(updateName(payload.name));
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
