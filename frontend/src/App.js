import React from 'react';
import Blogs from './Blogs';
import Footer from './Footer';
import Home from './Home';
import Nav from './nav'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import axios from 'axios';
import New from './New';
function App() {
  // axios.defaults.baseURL='http://localhost:8000';
  // axios.defaults.withCredentials=true;
  return (
    <UserContextProvider>
      <New />
    </UserContextProvider>
  );
}

export default App;
