import React from 'react'
import QuoteCard from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';
import '../styles/diary_entry/DiaryEntryPage.css';

export function DiaryEntryPage(props: {searchTerm: string}) {
    // const searchTerm = props.searchTerm; -> Use Redux for this instead of prop drilling
    return (
        <div className="container">
            <QuoteCard quote={EXAMPLE_QUOTE}/>
        </div>
    );
}