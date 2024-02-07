import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import '../styles/thoughts/QuoteCard.css';

const QUOTE_ICON_SIZE = 42;

export default function ThoughtDisplay(props: {quote: string}) {
    const quote = props.quote;
    return (
        <>
            <div className="quote-container">
                <div className="row qoute-left-container"><FaQuoteLeft className="pad-top-2" size={QUOTE_ICON_SIZE}/></div>
                <p className="quote">{quote}</p>
                <div className="row quote-right-container"><FaQuoteRight className="pad-bot-2" size={QUOTE_ICON_SIZE}/></div>
            </div>
        </>
    )
}