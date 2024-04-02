import React from 'react'
import QuoteCard from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';
import '../styles/diary_entry/DiaryEntryPage.css';
import { BackButton } from '../../shared/back-button/BackButton';
import { DiaryEntryTitle } from '../../shared/diary-entry-title/DiaryEntryTitle';

export function DiaryEntryPage() {
    const entityName = 'John Malkovich'
    return (
        <>
            <div className="container">
                <div className="page-header">
                    <div className="back-button-container">
                        <BackButton buttonText='BACK TO SEARCH' destination='place'/>
                    </div>
                    <div className="diary-entry-title">
                        <DiaryEntryTitle entityName={entityName}/>
                    </div>
                </div>
                <div className="quote-card-container">
                    <QuoteCard quote={EXAMPLE_QUOTE} entityName={entityName}/>
                </div>
            </div>
        </>
    );
}