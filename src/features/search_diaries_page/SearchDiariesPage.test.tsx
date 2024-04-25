import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "@jest/globals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import journalEntriesSlice from "../../core/store/journal_entries/journalEntriesSlice";
import namePromptSlice from "../../core/store/name_prompt/namePromptSlice";
import { configureStore } from "@reduxjs/toolkit";
import { SearchDiariesPage } from "./SearchDiariesPage";

const mockUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockUsedNavigate,
}));

describe("SearchDiariesPage", () => {
  let store: ReturnType<typeof configureStore>;
  let dispatchSpy: jest.SpyInstance;
  let navigateSpy: jest.SpyInstance;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        journalEntries: journalEntriesSlice,
        namePrompt: namePromptSlice,
      },
    });
    dispatchSpy = jest.spyOn(store, "dispatch");
  });

  afterEach(() => {
    dispatchSpy.mockRestore();
  });

  it("navigates to DiaryEntryPage when form is submitted", async () => {
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

    expect(mockUsedNavigate).toHaveBeenCalled();
  });
});
