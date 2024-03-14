import React from "react"
import '../styles/diary_entry/SearchDiaryPage.css'
import { WHIMSICAL_SYNONYMS_FOR_SEARCH } from "../../core/assets/whimsical_words";

export function SearchDiaryPage() {
    const randomNumber = Math.floor(Math.random() * WHIMSICAL_SYNONYMS_FOR_SEARCH.length);
    return (
          <div className="container">
            <div className="content">
                <div className="search-diary-entries-title">
                    <h1>SEARCH</h1>
                    <h1>DIARY</h1>
                    <h1>ENTRIES</h1>
                </div>
                <form action="#" method="GET" className="search-form">
                    <input type="text" name="search" placeholder="Search diary entries..."/>
                    <button type="submit">{ WHIMSICAL_SYNONYMS_FOR_SEARCH[randomNumber] }</button>
                </form>
            </div>
        </div>
    );
}