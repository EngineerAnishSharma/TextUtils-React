import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title="Textutils light mode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
      document.title="Textutils dark mode";
    }
  }
  const toggleGreen=()=>{
    if(mode==='green'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
    else{
      setMode('green');
      document.body.style.backgroundColor='green';
      showAlert("Green mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <TextForm heading="Write your thoughts here!" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch> */}
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Write your thoughts here!" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
