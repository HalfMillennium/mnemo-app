import React from "react";
import {ShowThoughtsPage} from '../../features/thoughts';
import '../styles/AppBody.css';

export function AppBody() {
  const searchTerm = "Taylor Swift";
  return (
      <ShowThoughtsPage searchTerm={searchTerm}/>
  );
}
