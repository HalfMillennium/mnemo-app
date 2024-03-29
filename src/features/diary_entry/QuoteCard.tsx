import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaRegShareSquare, FaRegCopy } from "react-icons/fa";
import '../styles/diary_entry/QuoteCard.css';
import { Tooltip } from 'react-tooltip';
import { BioCardDisplay } from '../../shared/card-display/BioCardDisplay';

const QUOTE_ICON_SIZE = 42;

export default function QuoteCard(props: {quote: string, searchTerm: string}) {
    const {quote, searchTerm} = props;

    return (
        <div className="component-container">
            <div className="bio-card-container">
                <BioCardDisplay entityName={searchTerm}/>
            </div>
            <div className="quote-container">
                <div className="row qoute-left-container floated-left">
                    <FaQuoteLeft className="pad-top-2" size={QUOTE_ICON_SIZE}/>
                </div>
                <div className="quote">
                    <div className="floated-right">
                        <img className="person-image-top" src="https://via.placeholder.com/200" alt="placeholder"></img>
                    </div>
                    {quote}
                    <div className="row quote-right-container floated-right">
                        <FaQuoteRight className="pad-bot-2" size={QUOTE_ICON_SIZE}/>
                    </div>
                </div>
                <div className="row">
                    <p><span className="post-date">February 20th, 2024</span> - 1:48pm</p>
                    <img src={require('../../core/assets/apollo_trans.gif')} width={50} height={50}/>
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
            <Tooltip anchorSelect=".row" clickable place="bottom">
                Precise date brought to you by a friend of Apollo.
            </Tooltip>
        </div>
    )
}