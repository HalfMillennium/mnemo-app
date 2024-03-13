import React from "react"
import '../styles/diary_entry/SearchDiaryPage.css'

export function SearchDiaryPage() {
    return <> 
        <div id="app-body">
            <div id="searchContainer">
                <input type="text" id="searchBox" placeholder="Search diaries..."/>
                <button id="getDiaryEntryBtn">Get today's diary entry</button>
            </div>
        </div>
    </>
}