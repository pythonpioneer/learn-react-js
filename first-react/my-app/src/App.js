import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

// eslint-disable
function App() {

  const [colorMode, setColorMode] = useState('light');   // to enable dark mode
  const [alertMsg, setAlertMsg] = useState(null);  // to set alert properties (msg, type)

  // creating a method to show alerts
  const showAlertMsg = (message, type) => {
    setAlertMsg({
      message: message,
      type: type,
    });
    setTimeout( () => {
      setAlertMsg(null);
    }, 2000);
  }

  // this method is used to enable dark mode, when button clicked
  const toggleMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
      document.body.style.backgroundColor = 'darkslategray';
      showAlertMsg("Dark Mode enabled", "success")
    }
    else {
      setColorMode('light');
      document.body.style.backgroundColor = 'white';
      showAlertMsg("Light Mode enabled", "success")
    }

  }

  return (
    <>
      <Navbar title="TextUtils" first="Home" second="About" colorMode={colorMode} toggleMode={toggleMode} />
      <Alert alertMsg={alertMsg}/>
      <Routes>
        <Route path="/" element={<TextForm colorMode={colorMode} showAlertMsg={showAlertMsg} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
