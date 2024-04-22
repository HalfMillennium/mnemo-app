import React from "react";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <div className={styles["error-body"]}>
      <div className={styles["error-card"]}>
        <h1>Uh oh! Looks like you've entered a wrong warp code.</h1>
        <p>
          The page you're looking for isn't here. Don't worry, it happens to the
          best of us.
        </p>
        <a href="/">Take me back to search</a>
      </div>
    </div>
  );
}
