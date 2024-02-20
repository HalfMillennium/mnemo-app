import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaRegShareSquare, FaRegCopy } from "react-icons/fa";
import '../styles/thoughts/QuoteCard.css';
import { EmojiPanel } from '../../shared/EmojiPanel';

const QUOTE_ICON_SIZE = 42;

export default function QuoteCard(props: {quote: string}) {
    const {quote} = props;

    return (
        <>
            <div className="presentation-group">
                <div className="emoji-holder">
                    <EmojiPanel/>
                </div>
                <div className="quote-container">
                    <div className="row qoute-left-container floated-left">
                        <FaQuoteLeft className="pad-top-2" size={QUOTE_ICON_SIZE}/>
                    </div>
                    <p className="quote">
                        <div className="floated-right">
                            <img className="person-image-top" src="https://via.placeholder.com/200" alt="placeholder"></img>
                        </div>
                        {quote}
                        <div className="row quote-right-container floated-right">
                            <FaQuoteRight className="pad-bot-2" size={QUOTE_ICON_SIZE}/>
                        </div>
                    </p>
                    <div className="row">
                        <p><span className="post-date">February 20th, 2024</span> - 1:48pm</p>
                    </div>
                </div>
                <div className="share-options">
                    <div className="share-icons-parent">
                        <div className="share-icon">
                            <FaRegShareSquare size={24}/>
                        </div>
                        <div className="share-icon">
                            <FaRegCopy size={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}