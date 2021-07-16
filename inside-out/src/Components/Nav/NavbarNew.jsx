import React from 'react'
import Modal from "../Modal/Modal"

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <Modal />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/about" activeStyle>
            Pen to Paper
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  )
}
