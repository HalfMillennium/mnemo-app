import React from "react";
import { Route, Routes } from "react-router-dom";
import { DiaryEntryPage } from "../../features/diary_entry_page";
import { SearchDiariesPage } from "../../features/search_diaries_page";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/AppBody.module.css";

export function AppBody() {
  const currentEntityName = useSelector(
    (state: RootState) => state.namePrompt.name
  );

  return (
    <div className={styles["app-body"]}>
      <div className={styles["app-body-main"]}>
        <Routes>
          <Route path="/" element={<SearchDiariesPage />} />
          <Route
            path="/journal"
            element={<DiaryEntryPage entityName={currentEntityName} />}
          />
        </Routes>
      </div>
    </div>
  );
}
