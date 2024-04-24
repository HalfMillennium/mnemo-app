import React from "react";
import styles from "./ErrorPage.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearError } from "../../core/store/journal_entries/journalEntriesSlice";

export function ErrorPage(props: { text: string }) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch, location]);
  return (
    <div className={styles["error-body"]}>
      <div className={styles["error-card"]}>
        <h1>Uh oh!</h1>
        <p>{props.text}</p>
        <a href="/">Take me back</a>
      </div>
    </div>
  );
}
