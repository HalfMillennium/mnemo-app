import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import '../styles/thoughts/QuoteCard.css';
import { EmojiPanel } from '../../shared/EmojiPanel';

const QUOTE_ICON_SIZE = 42;

export default function QuoteCard(props: {quote: string}) {
    const {quote} = props;

    return (
        <>
            <div className="presentation-group">
                <div className="emoji-holder-left">
                    <EmojiPanel/>
                </div>
                <div className="quote-container">
                    <div className="row qoute-left-container">
                        <FaQuoteLeft className="pad-top-2" size={QUOTE_ICON_SIZE}/>
                    </div>
                    <p className="quote">
                        <div className="floated-right">
                            <img className="person-image-top" src="https://via.placeholder.com/200" alt="placeholder"></img>
                        </div>
                        {quote}
                        <div className="floated-left">
                            <img className="person-image-bottom" src="https://via.placeholder.com/200" alt="placeholder"></img>
                        </div>
                    </p>
                    <div className="row quote-right-container">
                        <div className="image-stack">
                            <FaQuoteRight className="pad-bot-2 image-stack__item--top" size={QUOTE_ICON_SIZE}/>
                            <FaQuoteRight className="pad-bot-2" size={QUOTE_ICON_SIZE}/>
                        </div>
                    </div>
                </div>
                <div className="emoji-holder-right">
                    <p>
                        Place some MORE cool, relevant emojis here
                    </p>
                </div>
            </div>
        </>
    )
}