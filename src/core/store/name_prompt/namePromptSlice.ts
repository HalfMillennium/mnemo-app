import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface NamePromptState {
  name: string | undefined;
}

const initialState: NamePromptState = {
  name: undefined,
};

const namePromptSlice = createSlice({
  name: "namePrompt",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = namePromptSlice.actions;

export default namePromptSlice.reducer;
