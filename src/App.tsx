import React from "react";
import { AppBody, Header, Footer } from "./core/components";

import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="app-body">
          <AppBody/>
        </div>
        <Footer/>
        <video className='videoTag' autoPlay loop muted>
            <source src={require('./core/assets/page_background.mov')} type='video/mp4' />
        </video>
      </div>
  );
}

export default App;
