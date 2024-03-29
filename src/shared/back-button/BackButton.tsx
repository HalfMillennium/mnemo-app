import React from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import './BackButton.css';

export function BackButton(props: {buttonText: string, destination: string}) {
    const {buttonText, destination} = props;
    return (
        <div className="back-button-group">
            <div className="back-button-icon">
                <IoReturnUpBackSharp size={28}/>
            </div>
            <div className="back-button-text">
                <h3>{buttonText}</h3>
            </div>
        </div>
    );

    function navigate() {
        // go back to url
        return undefined;
    }
}