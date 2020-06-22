import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderLayout from "./components/layout/HeaderLayout";
import BodyLayout from "./components/layout/BodyLayout";

function App() {
  return (
    <div className="App">
        <HeaderLayout /> 
        <BodyLayout /> 
    </div>
  );
}

export default App;
