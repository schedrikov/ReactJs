import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
