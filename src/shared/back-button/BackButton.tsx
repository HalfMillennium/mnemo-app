import React from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { IconButton } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './BackButton.css';

export function BackButton(props: {buttonText: string, destination: string}) {
    const {buttonText, destination} = props;
    const navigate = useNavigate();

    return (
        <div className="back-button-group">
            <IconButton onClick={navigateToDestination}>
                <IoReturnUpBackSharp size={28}/>
                <span className="space-left">
                    <h3>{buttonText}</h3>
                </span>
            </IconButton>
        </div>
    );

    function navigateToDestination() {
        // go to url
        navigate(destination);
    }
}