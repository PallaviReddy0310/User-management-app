import React,{useContext} from 'react';
import { loginContext } from '../../contexts/loginContext';
import './userprofile.css';
import {NavLink,Outlet} from 'react-router-dom';


function UserProfile() {
  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext);

  const activeLink = {
    color: "red",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const inactiveLink = {
    color: "black",
    fontSize: "1.2rem"
  };
  return (
    <div>
      <p className='display-5 text-center'>Welcome</p>
      <ul className="nav justify-content-around">
      <li className="nav-item">
              <NavLink
                className="nav-link"
                to="products"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
            <NavLink
                className="nav-link"
                to="cart"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Cart
              </NavLink>
            </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default UserProfile;