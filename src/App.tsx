import React, { useEffect } from "react";
import { AppBody, Header } from "./core/components";
import './App.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "./core/store/store";

function App() {
  const pageState = useSelector((state: RootState) => state.journalEntries.pageState);
  const [pageClass, setPageClass] = useState('bg-video-search-diaries');

  useEffect(() => {
    getPageClass(pageState);
    console.log('called');
  }, [pageState]);

  return (
      <div className="App">
        <Header/>
        <div className="app-body">
          <AppBody pageState={pageState}/>
        </div>
        <video className={pageClass} autoPlay loop muted>
            <source src={require('./core/assets/page_background.mov')} type='video/mp4' />
        </video>
      </div>
  );

  function getPageClass(pageState: number) {
    switch(pageState) {
      case 0:
        setPageClass('');
        break;
      case 1:
        setPageClass('bg-video-search-diaries');
        break;        
      case 2:
        console.log('setting bg-video-diary-entry');
        setPageClass('bg-video-diary-entry');
        break;
      default:
    }
  }
}

export default App;
