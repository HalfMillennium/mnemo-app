import React from "react";
import { AppBody, Header, Footer } from "./core/components";
import { FaBackward } from "react-icons/fa6";

import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="app-body">
          <AppBody/>
        </div>
        <video className={onlyForTesting()} autoPlay loop muted>
            <source src={require('./core/assets/page_background.mov')} type='video/mp4' />
        </video>
      </div>
  );

  function onlyForTesting() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
      case 0:
        return 'bg-video-search-diaries';
      case 1:
        return 'bg-video-diary-entry';
      default:
        return 'bg-progress-page';
    }
  }
}

export default App;
