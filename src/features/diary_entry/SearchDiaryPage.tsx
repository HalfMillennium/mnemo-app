import React, { FormEvent } from "react"
import '../styles/diary_entry/SearchDiaryPage.css'
import { WHIMSICAL_SYNONYMS_FOR_SEARCH } from "../../core/assets/whimsical_words";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { updateName } from "../../core/store/name_prompt/namePromptSlice";

export function SearchDiaryPage() {
    const namePrompt = useSelector((state: RootState) => state.namePrompt.name);
    const dispatch = useDispatch();
    
    return (
          <div className="container">
            <div className="content">
                <div className="search-diary-entries-title">
                    <h1>SEARCH</h1>
                    <h1>JOURNAL</h1>
                    <h1>ENTRIES</h1>
                </div>
                <NamePromptForm/>
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
                dispatch(updateName(formValue))
                console.log('Action dispatched!')
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