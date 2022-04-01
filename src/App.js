import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React,{useState} from 'react'
//import {
// BrowserRouter as Router,
//  Switch,
//  Route 
//} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success")
  }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success")
  }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
 
  return (
    <>
      {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Switch>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          </Route>
      </Switch>*/}
     <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
      {/*</Router>*/}

    </>
  );
}

export default App;
