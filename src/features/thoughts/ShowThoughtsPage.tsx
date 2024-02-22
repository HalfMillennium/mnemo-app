import React from 'react'
import QuoteCard from './QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';

export function ShowThoughtsPage(props: {searchTerm: string}) {
    // const searchTerm = props.searchTerm; -> Use Redux for this instead of prop drilling
    return (
        <QuoteCard quote={EXAMPLE_QUOTE}/>
    );
}