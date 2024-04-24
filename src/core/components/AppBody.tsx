import React from "react";
import { Route, Routes } from "react-router-dom";
import { DiaryEntryPage } from "../../features/diary_entry_page";
import { SearchDiariesPage } from "../../features/search_diaries_page";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/AppBody.module.css";
import { ErrorPage } from "../../shared/error-page";
import { ROUTING_ERROR_TEXT } from "./utils";

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
          <Route path="*" element={<ErrorPage text={ROUTING_ERROR_TEXT} />} />
        </Routes>
      </div>
    </div>
  );

  /**
   *  Implement an HOC for route protection?
   * 
  *   function ProtectedRoute({ element, ...rest }) {
        const isAuthorized = useSelector(
          (state: RootState) => state.user.isAuthorized
        );

        return isAuthorized ? (
          <Route {...rest} element={element} />
        ) : (
          <Navigate to="/login" replace />
        );
      }
   */
}
