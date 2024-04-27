import React from "react";
import styles from "./ProgressPage.module.css";
import { Button, CircularProgress } from "@mui/material";

export function ProgressPage(props: { entityName: string | undefined }) {
  document.body.style.overflow = "hidden";
  return (
    <div className={styles["progress-container"]}>
      <div className={styles["progress-bar"]}>
        <CircularProgress color="inherit" size={128} />
      </div>
      <div className={styles["progress-bar-actions"]}>
        <p className={styles["progress-bar-text"]}>
          Loading the intimate thoughts of {props.entityName}...
        </p>
        <div>
          <Button variant="outlined" color="inherit" href="/">
            ¿Cancel?
          </Button>
        </div>
      </div>
    </div>
  );
}
