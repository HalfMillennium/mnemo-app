import React from "react";
import './ProgressPage.css';
import {Button, CircularProgress} from '@mui/material';

export function ProgressPage(props: {entityName: string}) {
    return (
        <div className="progress-container">
            <div className="progress-bar">
                <CircularProgress color="inherit" size={128}/>
            </div>
            <div className="progress-bar-text">
                <p>Loading the intimate thoughts of {props.entityName}...</p>
                <div>
                    <Button variant="outlined" color="inherit">¿Cancel?</Button>
                </div>
            </div>
        </div>
    )
}