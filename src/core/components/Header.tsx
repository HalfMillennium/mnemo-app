import React from "react";
import '../styles/Header.css'
import { InfoBox } from "./InfoBox";
import { useState } from "react";

export function Header() {
    const siteTitleDisplay = "mnemo"
    return (
        <div className="header-container" >
            <div className="header">
                {siteTitleDisplay}
            </div>
        </div>
    );
}