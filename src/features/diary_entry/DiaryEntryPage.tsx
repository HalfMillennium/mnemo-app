import React from 'react'
import QuoteCard from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';
import '../styles/diary_entry/DiaryEntryPage.css';
import { BackButton } from '../../shared/back-button/BackButton';

export function DiaryEntryPage() {
    return (
        <>
            <div className="container">
                <div className="back-button-container">
                    <BackButton buttonText='BACK TO SEARCH' destination='place'/>
                </div>
                <div className="quote-card-container">
                    <QuoteCard quote={EXAMPLE_QUOTE} searchTerm='John Malkovich'/>
                </div>
            </div>
        </>
    );
}