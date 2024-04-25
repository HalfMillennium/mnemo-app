import React from "react";
import "./InfoBox.css";

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
        <a
          href={props.link}
          className="more-info-link"
          rel="noopener"
          target="_blank"
        >
          <u>HERE</u>
        </a>
      </div>
    </>
  );
}
