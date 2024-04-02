import React from "react";
import './BioCardDisplay.css';

export function BioCardDisplay(props: {entityName: string}) {
    return (
        <div className="bio-card-parent">
            <div>
                <img src="https://placehold.co/200x200" className="bio-image"/>
            </div>
            <span className="bio-text">
                {props.entityName} is an American actor known for his versatile and intense performances on stage and screen, with notable roles in "Dangerous Liaisons" and "Being John Malkovich."
            </span>
        </div>
    );
}