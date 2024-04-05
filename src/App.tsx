import React, { useEffect } from "react";
import { AppBody, Header } from "./core/components";
import './App.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./core/store/store";

function App() {
  const location = useLocation();
  const loadingStatus = useSelector((state: RootState) => state.journalEntries.loading);

  const [pageClass, setPageClass] = useState('');

  useEffect(() => {
    if(location.pathname === '/journal') {
      if(loadingStatus) {
        // Diary entry is loading, set appropriate page class
        setPageClass('bg-progress-page');
        return;
      }
      setPageClass('bg-diary-entry');
      return;
    }
    // Use default styling on '/' route
    setPageClass('');
  }, [location, loadingStatus]);
  return (
      <div className="App">
        <Header/>
        <div className="app-body">
            <AppBody />
        </div>
        <video className={pageClass} autoPlay loop muted>
            <source src={require('./core/assets/page_background.mov')} type='video/mp4' />
        </video>
      </div>
  );
}

export default App;
