import React, { useState, useEffect } from 'react';
import MapPage from './Pages/MapPage.jsx';
import MainPage from './Pages/MainPage.jsx';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
 

function App() {
  return (
    <div>
      <MainPage/>
    </div>
  );
}

export default App;