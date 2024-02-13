import React from 'react'
import QuoteCard from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';

export function ShowThoughtsPage(props: {searchTerm: string}) {
    // const searchTerm = props.searchTerm; -> Use Redux for this instead of prop drilling
    return (
        <div className="container">
            <p className="preamble">And the quote of the day is...</p>
            <QuoteCard quote={EXAMPLE_QUOTE}/>
        </div>
    )
}