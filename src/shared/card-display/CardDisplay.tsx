import React from "react";
import './CardDisplay.css';

export function CardDisplay() {
    return (
        <div className="bio-card-parent">
            <p className="bio-text">
                <img src="https://placehold.co/100x100" className="bio-image"/>
                John Malkovich is an American actor known for his versatile and intense performances on stage and screen, with notable roles in "Dangerous Liaisons" and "Being John Malkovich."
            </p>
        </div>
    );
}