import React, { Component,useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
// import NavbarElement from './Components/Navbar/NavbarElement';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import './App.css'; 

class App extends Component {
  
  render() {
    return (
      
     <Router>
      <div className='App'>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Registration />}></Route>
          <Route exact path='/about' element={< About/>}></Route>
          <Route exact path='/service' element={< Service/>}></Route>
        </Routes>
      </div>
     </Router>
      
    );
  }
}

export default App;
