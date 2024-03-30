import React from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { IconButton } from '@mui/material';
import './BackButton.css';

export function BackButton(props: {buttonText: string, destination: string}) {
    const {buttonText, destination} = props;
    return (
        <div className="back-button-group">
            <IconButton onClick={navigate}>
                <IoReturnUpBackSharp size={28}/>
                <span className="space-left">
                    <h3>{buttonText}</h3>
                </span>
            </IconButton>
        </div>
    );

    function navigate() {
        // go back to url
        console.log(`Should navigate to: ${destination}`);
        return undefined;
    }
}