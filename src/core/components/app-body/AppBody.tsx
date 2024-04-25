import React from "react";
import { Route, Routes } from "react-router-dom";
import { DiaryEntryPage } from "../../../features/diary_entry_page";
import { SearchDiariesPage } from "../../../features/search_diaries_page";
import styles from "./AppBody.module.css";
import { ErrorPage } from "../../../shared/error-page";
import { ROUTING_ERROR_TEXT } from "../utils";

export function AppBody() {
  return (
    <div className={styles["app-body"]}>
      <div className={styles["app-body-main"]}>
        <Routes>
          <Route path="/" element={<SearchDiariesPage />} index />
          <Route
            path="/journal/:entityName"
            element={<DiaryEntryPage />}
            index
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
