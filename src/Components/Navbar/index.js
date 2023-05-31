import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/service' activeStyle>
            Services
          </NavLink>
          {/* <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>LogIn</NavBtnLink>
        </NavBtn>
        <NavMenu>
          <NavLink to='/register' activeStyle>Sign Up</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;