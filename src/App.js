
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode= (cls)=>{
    if(mode === 'light'){
      setMode  ('dark')
      document.body.style.backgroundColor = 'rgb(63, 62, 62)';
      
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
    

    }
  }


  return (
    <>
    <NoteState>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
        <Routes>
          <Route exact path="/" element={<Home mode={mode}  showAlert={showAlert} />}>
            </Route>
          <Route exact path="/about"  element={ <About mode={mode} />}>
             </Route>
         <Route exact path="/login" element={ <Login mode={mode}  showAlert={showAlert} />}>
             </Route>
        <Route exact path="/signup" element={ <Signup mode={mode}  showAlert={showAlert}  />}>
             </Route>
       </Routes>
       
    </div>
    <Footer mode={mode} />
    </Router>
    </NoteState>
    </>
  );
}

export default App;
