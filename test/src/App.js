import './App.css';
import Text from './Components/Text';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'

function App() {

  const [mode, setmode] = useState("light")

  const togglemode = () => {

    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#4c4255'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
      <div className="container my-3 ">
        <Text heading="Enter text to analyze " mode={mode} />
      </div>

    </>
  );
}

export default App;
