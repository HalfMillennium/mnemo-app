import React from "react";
import { AppBody, Header, Footer } from "./core/components";

import './App.css';

function App() {
  return (
      <div className="App">
        <div className="basic-header">
          <Header />
        </div>
        <AppBody/>
        <Footer/>
      </div>
  );
}

export default App;
