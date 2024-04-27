import React, { FormEvent, useEffect } from "react";
import { WHIMSICAL_SYNONYMS_FOR_SEARCH } from "../../core/assets/whimsical_words";
import { MNEMOSYNE_BLURB } from "../utils/search_diaries_page";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LoadingStatus } from "../../core/store/journal_entries/journalEntriesSlice";
import { Tooltip } from "react-tooltip";
import { InfoBox } from "../../core/components/info-box";
import { FaQuestionCircle } from "react-icons/fa";
import { RootState } from "../../core/store/store";
import styles from "./SearchDiariesPage.module.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export function SearchDiariesPage() {
  const loadingStatus = useSelector(
    (state: RootState) => state.journalEntries.loading
  );
  const [placeholderText, setPlaceholderText] = useState(
    "Search the diaries of the world..."
  );
  const navigate = useNavigate();
  const [entityName, setEntityName] = useState("");

  useEffect(() => {
    if (loadingStatus === LoadingStatus.PENDING) {
      const mysteriousAscii: string =
        "@#^*()_+{}[]|\\:;\"'<>,.?/~`%$£=&!§±¶•ªº–≠≈∆∏∑Ωµ√∞≤≥÷";
      setPlaceholderText(mysteriousAscii);
      navigate(`/journal/${entityName}`);
    }
  }, [loadingStatus, navigate, entityName]);
  return (
    <>
      <Helmet>
        <title>MNEMO | Search diary entries</title>
      </Helmet>
      <div className={styles["search-page-container"]}>
        <div className={styles["search-page-content"]}>
          <div className={styles["search-diary-entries-title"]}>
            <h1 className={styles["title-h1"]}>SEARCH</h1>
            <h1 className={styles["title-h1"]}>JOURNAL</h1>
            <h1 className={styles["title-h1"]}>ENTRIES</h1>
          </div>
          <div className={styles["bottom-container"]}>
            <span className={styles["name-prompt-form-container"]}>
              <NamePromptForm />
            </span>
            <span className={styles["static-info-box"]}>
              <InfoBox
                text={MNEMOSYNE_BLURB}
                imageSrc={
                  "https://upload.wikimedia.org/wikipedia/commons/8/87/Mnemosyne_-_the_Greek_goddess_of_Memory.jpg"
                }
                link={"https://github.com/HalfMillennium/mnemo-app"}
                linkText={"Check out the GitHub repo"}
              />
            </span>
            <FaQuestionCircle
              id="question-mark"
              className={styles["question-mark"]}
              size={24}
              color="#1e1e1e"
            />
            <Tooltip anchorSelect="#question-mark" clickable place="bottom">
              <h4>What? Why?</h4>
              <InfoBox
                text={MNEMOSYNE_BLURB}
                imageSrc={
                  "https://upload.wikimedia.org/wikipedia/commons/8/87/Mnemosyne_-_the_Greek_goddess_of_Memory.jpg"
                }
                link={"https://github.com/HalfMillennium/mnemo-app"}
                linkText={"Check out the GitHub repo"}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );

  function getRandomNumber() {
    return Math.floor(Math.random() * WHIMSICAL_SYNONYMS_FOR_SEARCH.length);
  }

  function NamePromptForm() {
    const [randomNumber, setRandomNumber] = useState(0);
    const [form, setForm] = useState({ namePromptInput: "" });

    function submitNamePrompt(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      let formValue = form.namePromptInput;
      if (formValue) {
        setEntityName(formValue);
        navigate(`/journal/${formValue}`);
      }
    }
    return (
      <form
        role="form"
        className={styles["search-form"]}
        onSubmit={submitNamePrompt}
      >
        <input
          id="searchBox"
          type="text"
          name="namePromptInput"
          className={styles["search-input"]}
          disabled={loadingStatus === LoadingStatus.PENDING}
          value={form.namePromptInput}
          placeholder={placeholderText}
          onChange={(e) => {
            if (form.namePromptInput !== e.target.value) {
              setForm((prev) => ({ ...prev, namePromptInput: e.target.value }));
            }
          }}
          required
        />
        <button
          className={styles["search-button"]}
          type="submit"
          onMouseEnter={() => setRandomNumber(getRandomNumber())}
          disabled={loadingStatus === LoadingStatus.PENDING}
        >
          {WHIMSICAL_SYNONYMS_FOR_SEARCH[randomNumber]}
        </button>
      </form>
    );
  }
}
