import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// eslint-disable
function App() {

  // creating an usestate and function to enable dark mode
  const [colorMode, setColorMode] = useState('light');

  const toggleMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
      // document.body.style.backgroundColor = 'darkslategray';
    }
    else {
      setColorMode('light');
      // document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>
      <Navbar title="TextUtils" first="Home" second="About" colorMode={colorMode} toggleMode={toggleMode} />
      <TextForm colorMode={colorMode} />
      
    </>
  );
}

export default App;
