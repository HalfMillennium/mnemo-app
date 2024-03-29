import React from "react";
import './BioCardDisplay.css';

export function BioCardDisplay(props: {entityName: string}) {
    return (
        <div className="bio-card-parent">
            <p className="bio-text">
                <img src="https://placehold.co/100x100" className="bio-image"/>
                {props.entityName} is an American actor known for his versatile and intense performances on stage and screen, with notable roles in "Dangerous Liaisons" and "Being John Malkovich."
            </p>
        </div>
    );
}