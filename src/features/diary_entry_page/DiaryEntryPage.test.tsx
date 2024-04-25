import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { DiaryEntryPage } from "./DiaryEntryPage";
import journalEntriesSlice, {
  JournalEntry,
  LoadingStatus,
  initialState as journalEntriesInitialState,
} from "../../core/store/journal_entries/journalEntriesSlice";
import namePromptSlice, {
  initialState as namePromptInitialState,
} from "../../core/store/name_prompt/namePromptSlice";

describe("DiaryEntryPage", () => {
  function setUp(
    journalEntriesState = journalEntriesInitialState,
    namePromptState = namePromptInitialState
  ): Store {
    const store = configureStore({
      reducer: {
        journalEntries: journalEntriesSlice,
        namePrompt: namePromptSlice,
      },
      preloadedState: {
        journalEntries: journalEntriesState,
        namePrompt: namePromptState,
      },
    });
    return store;
  }

  it("renders without crashing", () => {
    const store = setUp();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiaryEntryPage />
        </BrowserRouter>
      </Provider>
    );
  });

  it("shows the correct title when loading", async () => {
    const store = setUp();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/journal/Test Entity"]}>
          <Routes>
            <Route path="/journal/:entityName" element={<DiaryEntryPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(document.title).toBe("| Making magic happen...")
    );
  });

  it("shows the correct title when not loading", async () => {
    const store = setUp({
      ...journalEntriesInitialState,
      queries: { "Test Entity": {} as JournalEntry },
      loading: LoadingStatus.SUCCESS,
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/journal/Test Entity"]}>
          <Routes>
            <Route path="/journal/:entityName" element={<DiaryEntryPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(document.title).toBe("| The Journal of Test Entity")
    );
  });

  it("shows error page when no entity name is present", async () => {
    const store = setUp();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiaryEntryPage />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => expect(document.title).toBe("Something went wrong."));
  });
});
