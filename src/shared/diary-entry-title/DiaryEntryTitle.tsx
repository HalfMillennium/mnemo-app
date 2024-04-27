import React from "react";
import styles from "./DiaryEntryTitle.module.css";

export function DiaryEntryTitle(props: { entityName: string | undefined }) {
  const { entityName } = props;
  const quoteMark = <span className={styles["quote-mark"]}>"</span>;
  return (
    <div className={styles["title-container"]}>
      <h1 className={styles["title-text"]}>FROM THE</h1>
      <h1 className={styles["title-text"]}>DIARY OF</h1>
      <h2 className={styles["subtitle-text"]}>
        {quoteMark}
        <span>{entityName}</span>
        {quoteMark}
      </h2>
    </div>
  );
}
