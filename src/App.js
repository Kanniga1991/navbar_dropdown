import React from 'react'
import './App.css';
import Navbar from './Navbar'
import {BrowserRouter as Router} from "react-router-dom";
import {Link } from "react-router-dom";
import { Button } from './Button';

function App() {
  
  return (
  <Router>
    <Navbar />
    </Router>    
             
  );
}
export default App;
