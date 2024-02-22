import React from "react";
import {ShowThoughtsPage} from '../../features/thoughts';
import '../styles/AppBody.css';

export function AppBody() {
  const searchTerm = "Taylor Swift";
  return (
      <div className="app-body">
        <div className="app-body-main">
          <ShowThoughtsPage searchTerm={searchTerm}/>
        </div>
      </div>
  );
}
