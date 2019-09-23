import React from 'react';
import Navbar from './components/Navbar';
import DescriptionBar from './components/DescriptionBar';
import UserContextProvider from './contexts/UserContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar/>
        <DescriptionBar/>
      </UserContextProvider>
    </div>
  );
}

export default App;
