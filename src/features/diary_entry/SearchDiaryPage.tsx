import React from "react"
import '../styles/diary_entry/SearchDiaryPage.css'
import { WHIMSICAL_SYNONYMS_FOR_SEARCH } from "../../core/assets/whimsical_words";
import { useState } from "react";

export function SearchDiaryPage() {
    const [randomNumber, setRandomNumber] = useState(0);
    return (
          <div className="container">
            <div className="content">
                <div className="search-diary-entries-title">
                    <h1>SEARCH</h1>
                    <h1>DIARY</h1>
                    <h1>ENTRIES</h1>
                </div>
                <form action="#" method="GET" className="search-form">
                    <input 
                        id="searchBox" type="text" name="search" placeholder="Search diary entries..."/>
                    <button type="submit" onMouseEnter={() => setRandomNumber(getRandomNumber())}>{ WHIMSICAL_SYNONYMS_FOR_SEARCH[randomNumber] }</button>
                </form>
            </div>
        </div>
    );

    function getRandomNumber() {
        return Math.floor(Math.random() * WHIMSICAL_SYNONYMS_FOR_SEARCH.length)
    }
}