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
        <video className={(Math.floor(Math.random() * 2) > 0) ? 'bg-video-search-diaries' : 'bg-video-diary-entry'} autoPlay loop muted>
            <source src={require('./core/assets/page_background.mov')} type='video/mp4' />
        </video>
      </div>
  );
}

export default App;
