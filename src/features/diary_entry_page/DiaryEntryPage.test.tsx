import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { DiaryEntryPage } from "./DiaryEntryPage";
import journalEntriesSlice, {
  initialState as journalEntriesInitialState,
} from "../../core/store/journal_entries/journalEntriesSlice";
import namePromptSlice, {
  initialState as namePromptInitialState,
} from "../../core/store/name_prompt/namePromptSlice";

describe("DiaryEntryPage", () => {
  let store: Store;

  function setUp(
    journalEntriesState = journalEntriesInitialState,
    namePromptState = namePromptInitialState
  ) {
    store = configureStore({
      reducer: {
        journalEntries: journalEntriesSlice,
        namePrompt: namePromptSlice,
      },
      preloadedState: {
        journalEntries: journalEntriesState,
        namePrompt: namePromptState,
      },
    });
  }

  it("renders without crashing", () => {
    setUp();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiaryEntryPage entityName="Test Entity" />
        </BrowserRouter>
      </Provider>
    );
  });

  it("shows the correct title when loading", async () => {
    setUp({ queries: {}, loading: true, error: "" });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiaryEntryPage entityName="Test Entity" />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(document.title).toBe("| Making magic happen...")
    );
  });

  it("shows the correct title when not loading", async () => {
    setUp();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiaryEntryPage entityName="Test Entity" />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(document.title).toBe("| The Journal of Test Entity")
    );
  });
});
