import React from "react";
import '../styles/Header.css'

export function Header() {
    const siteTitleDisplay = "mnemo"
    return (
        <div className="header-container">
            <div className="header">
                {siteTitleDisplay}
            </div>
        </div>
    );
}