import React, { FormEvent } from "react"
import '../styles/diary_entry/SearchDiaryPage.css'
import { WHIMSICAL_SYNONYMS_FOR_SEARCH } from "../../core/assets/whimsical_words";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../core/store/store";
import { updateName } from "../../core/store/name_prompt/namePromptSlice";
import { fetchJournalEntryFromName } from "../../core/store/journal_entries/journalEntriesSlice";
import { Tooltip } from 'react-tooltip'
import { InfoBox } from "../../core/components/InfoBox";
import { FaQuestionCircle } from "react-icons/fa";

export function SearchDiaryPage() {
    const dispatch = useDispatch<AppDispatch>();
    return (
          <div className="container">
            <div className="content">
                <div className="search-diary-entries-title">
                    <h1>SEARCH</h1>
                    <h1>JOURNAL</h1>
                    <h1>ENTRIES</h1>
                </div>
                <div className="bottom-container">
                    <span className="name-prompt-container">
                        <NamePromptForm/> 
                    </span>
                    <FaQuestionCircle className="question-mark" size={24} color="#1e1e1e"/>
                    <Tooltip anchorSelect=".question-mark" clickable place="bottom">
                        <InfoBox/>
                    </Tooltip>
                </div>
            </div>
        </div>
    );

    function getRandomNumber() {
        return Math.floor(Math.random() * WHIMSICAL_SYNONYMS_FOR_SEARCH.length)
    }

    function NamePromptForm() {
        const [form, setForm] = useState({ namePromptInput: '' });
        const [randomNumber, setRandomNumber] = useState(0);
         
        function submitNamePrompt(event: FormEvent<HTMLFormElement>) {
            event.preventDefault();
            let formValue = form.namePromptInput;
            if(formValue) {
                dispatch(updateName(formValue));
                dispatch(
                    fetchJournalEntryFromName({
                        name: formValue,
                        journalEntry: { complete: false, content: undefined },
                    })
                );
            }
        }
        return (
            <form className="search-form" onSubmit={submitNamePrompt}>
                <input 
                    id="searchBox" 
                    type="text" 
                    name="namePromptInput"
                    value={form.namePromptInput}
                    placeholder="Search the diaries of the world..."
                    onChange={(e) => {
                            if(form.namePromptInput !== e.target.value) {
                                setForm((prev) => ({ ...prev, namePromptInput: e.target.value }))
                                console.log('Change!')
                            }
                        }
                    }
                    required    
                />
                <button type="submit" 
                    onMouseEnter={() => setRandomNumber(getRandomNumber())}>
                    { WHIMSICAL_SYNONYMS_FOR_SEARCH[randomNumber] }
                </button>
            </form>
        );
    }
}