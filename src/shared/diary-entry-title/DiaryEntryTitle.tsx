import React from "react";
import './DiaryEntryTitle.css';

export function DiaryEntryTitle(props: {entityName: string}) {
    const {entityName} = props;
    const quoteMark = <span className="quote-mark">"</span>;
    return (
        <div className="title-container">
            <h1>FROM THE</h1>
            <h1>DIARY OF</h1>
            <h2>{quoteMark}<span>{entityName}</span>{quoteMark}</h2>
        </div>
    );
}