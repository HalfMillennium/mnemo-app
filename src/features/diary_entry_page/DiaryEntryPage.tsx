import React from "react";
import QuoteCard from "../../shared/quote-card/QuoteCard";
import { EXAMPLE_QUOTE } from "../../testing/example_quote";
import styles from "./DiaryEntryPage.module.css";
import { BackButton } from "../../shared/back-button/BackButton";
import { DiaryEntryTitle } from "../../shared/diary-entry-title/DiaryEntryTitle";
import { ProgressPage } from "../../shared/progress-page/ProgressPage";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store/store";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  JournalEntry,
  LoadingStatus,
  fetchJournalEntryFromName,
} from "../../core/store/journal_entries/journalEntriesSlice";
import { ErrorPage } from "../../shared/error-page";
import { GENERIC_ERROR_TEXT } from "../utils/search_diaries_page";

/**
 * If entityName is defined, check if it exists in the queryHistory. If so, use the existing diaryEntryContent.
 *
 * Otherwise, dispatch a fetchJournalEntryFromName action with the entityName.
 */
export function DiaryEntryPage() {
  const { entityName } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const backLink = "/"; // TODO: Replace with actual back link
  const loadingStatus = useSelector(
    (state: RootState) => state.journalEntries.loading
  );
  const queryHistory = useSelector(
    (state: RootState) => state.journalEntries.queries
  );
  let diaryEntryContent: JournalEntry | undefined;

  document.body.style.overflowY = "visible";

  useEffect(() => {
    if (entityName) {
      if (queryHistory[entityName]) {
        diaryEntryContent = queryHistory[entityName];
        return;
      }
      dispatch(
        fetchJournalEntryFromName({
          name: entityName,
          journalEntry: { complete: false, content: undefined },
        })
      );
    }
  }, [entityName, dispatch]);
  if (entityName) {
    if (
      loadingStatus === LoadingStatus.SUCCESS ||
      loadingStatus === LoadingStatus.IDLE
    ) {
      return (
        <>
          <Helmet>
            <title>{`| The Journal of ${entityName}`}</title>
          </Helmet>
          <div className={styles["container"]}>
            <div className={styles["page-header"]}>
              <div className={styles["back-button-container"]}>
                <BackButton
                  buttonText="BACK TO SEARCH"
                  destination={backLink}
                />
              </div>
              <div className={styles["diary-entry-title"]}>
                <DiaryEntryTitle entityName={entityName} />
              </div>
            </div>
            <div className={styles["quote-card-container"]}>
              <QuoteCard
                quote={diaryEntryContent?.content ?? EXAMPLE_QUOTE}
                entityName={entityName}
              />
            </div>
          </div>
        </>
      );
    }
    if (loadingStatus === LoadingStatus.PENDING) {
      return (
        <>
          <Helmet>
            <title>| Making magic happen...</title>
          </Helmet>
          <ProgressPage entityName={entityName} />
        </>
      );
    }
  }
  return <ErrorPage text={GENERIC_ERROR_TEXT} />;
}
