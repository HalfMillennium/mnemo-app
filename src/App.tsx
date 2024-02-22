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
      </div>
  );
}

export default App;
