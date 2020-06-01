import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";

//Add Route For Login Page
function App() {
  return (
    <div className="App">
      <h1>Auth Friends App</h1>
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;