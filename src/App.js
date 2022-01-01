import {React,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home'
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  jwt  from 'jsonwebtoken';

export default function App() {
  

  let user = jwt.decode(localStorage.getItem('token'))


  return (

    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Login/>} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
};
