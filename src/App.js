
import { useState } from 'react';
import './App.css';
import About from './component/About';

import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [textBtn, setTextBtn] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // const changeText = (text)=>{
  //   setTextBtn({
  //     text:text,
  //   });
  // }


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#062552';
      showAlert("Dark mode has been enabled", "success");
      setTextBtn("Enable Light Mode");
      
      

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setTextBtn("Enable Dark Mode");
    }
  }
  return (
    <>


     <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} textBtn={textBtn} navAbout="About Us" />
        {/* <About/> */}
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route path="/" element={<TextForm heading="Enter a text to analyze" showAlert={showAlert} mode={mode} textBtn ={textBtn} />}/>
          </Routes>

        </div>
     </Router>
      
    </>
  );
}

export default App;
