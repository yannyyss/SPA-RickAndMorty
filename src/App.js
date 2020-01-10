import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <div>
      <div className="navbar">
      <NavLink className='link' activeClassName="active" exact to='/'>Inicio</NavLink>
      <NavLink className='link' activeClassName="active" exact to='/profile'>Profile</NavLink>
      <NavLink className='link' activeClassName="active" exact to='/episode'>Episode</NavLink>
      </div>
      <Routes/>
    </div>
  );
}

export default App;
