import React from 'react'
import ThoughtDisplay from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';

export function ShowThoughtsPage(props: {searchTerm: string}) {
    const searchTerm = props.searchTerm;
    return (
        <div className="container">
            <p className="preamble">And the quote of the day is...</p>
            <ThoughtDisplay quote={EXAMPLE_QUOTE}/>
        </div>
    )
}