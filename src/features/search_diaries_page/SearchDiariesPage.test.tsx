import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "@jest/globals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import journalEntriesSlice from "../../core/store/journal_entries/journalEntriesSlice";
import namePromptSlice from "../../core/store/name_prompt/namePromptSlice";
import { configureStore } from "@reduxjs/toolkit";
import { SearchDiariesPage } from "./SearchDiariesPage";

describe("SearchDiariesPage", () => {
  let store: ReturnType<typeof configureStore>;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        journalEntries: journalEntriesSlice,
        namePrompt: namePromptSlice,
      },
    });

    dispatchSpy = jest.spyOn(store, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockRestore();
  });

  it("dispatches updateName and fetchJournalEntryFromEntityName actions", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchDiariesPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(getByRole("textbox"), {
      target: { value: "test name" },
    });

    fireEvent.submit(getByRole("form"));
    
    // dispatch w/ Function => async thunk => fetchJournalEntryFromName
    expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Function));
  });
});
