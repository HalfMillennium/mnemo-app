import { useState } from "react";

export function copyText(quote: string | undefined) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);
  if (quote) {
    /**
     * https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative ( ¯\_(ツ)_/¯ )
     */
    document.execCommand("copy", true);
    /** For newer browsers */
    navigator.clipboard
      .writeText(quote)
      .then(() => {
        handleSnackbarOpen();
      })
      .catch((error) => {
        alert(`Copy failed! ${error}`);
      });
  }
}
