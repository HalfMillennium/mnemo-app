import React from "react"
import "../styles/thoughts/GetThoughtTarget.css"

export function GetThoughtTarget() {
    return <> 
        <div id="app-body">
            <div id="searchContainer">
                <input type="text" id="searchBox" placeholder="Enter your thoughts..."/>
                <button id="getThoughtsBtn">Get thoughts</button>
            </div>
        </div>
    </>
}