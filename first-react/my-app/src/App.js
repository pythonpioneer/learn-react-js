import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// eslint-disable
function App() {
  return (
    <>
      <Navbar title="TextUtils" first="Home" second="About" />
      <TextForm />
    </>
  );
}

export default App;
