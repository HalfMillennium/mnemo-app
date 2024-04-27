import React from "react";
import styles from "./Header.module.css";

export function Header() {
  const siteTitleDisplay = "mnemo";
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>{siteTitleDisplay}</div>
    </div>
  );
}
