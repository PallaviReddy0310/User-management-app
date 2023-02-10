import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './navigationbar.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import { loginContext } from '../../Contexts/loginContext';

function NavigationBar() {

  let [currentUser,error,userLoginStatus,loginUser,logoutUser] = useContext(loginContext);

  // if link is active
  let activeLink={
    color:'#2b12a4',
    fontSize:'1.5 rem',
    fontWeight:'bold',
    fontFamily:'georgia'
  }
  
  //if link is inactive
  let inactiveLink={
    fontSize:'1 rem',
    color:'black'
  }

  return(
  <nav class="navbar navbar-expand-lg navbar-light bg-warning" id='navi'>
    <img src='https://media.istockphoto.com/id/1397961210/vector/team-with-woman-and-men-icon-with-long-shadow-on-textured-yellow-background.jpg?s=612x612&w=0&k=20&c=JDyaxoQrP1B2pQXY67E3y4p98jT3u7gdt2PsCjD7gD0=' width='80px'/>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink className='nav-link' to='/' style={({isActive})=>{
          return isActive? activeLink : inactiveLink;
        }}>Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className='nav-link' to='/register' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }}>Register</NavLink>
      </li>
      {userLoginStatus?<li class="nav-item">
      <NavLink className='nav-link' to='/login' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }} onClick={logoutUser}>Logout</NavLink>
      </li>:
      <li class="nav-item">
      <NavLink className='nav-link' to='/login' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }}>Login</NavLink>
      </li>}
      <li class="nav-item">
      <NavLink className='nav-link' to='/aboutus' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }}>About Us</NavLink>
      </li>
    </ul>
  </div>
</nav>
)
}

export default NavigationBar;