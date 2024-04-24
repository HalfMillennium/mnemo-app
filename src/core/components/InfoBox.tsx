import React from "react";
import "../styles/InfoBox.css";

export function InfoBox(props: {
  text: string;
  imageSrc: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <>
      <div className="info-box">
        <div className="text-content">{props.text}</div>
        <div className="image-holder">
          <img src={props.imageSrc} alt="mnemo" />
        </div>
      </div>
      <div className="more-info">
        {props.linkText}{" "}
        <a href={props.link} rel="external" className="more-info-link">
          <u>HERE</u>
        </a>
      </div>
    </>
  );
}
