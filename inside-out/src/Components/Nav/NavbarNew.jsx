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
          <Link to="/about" activeStyle>
            About
          </Link>
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

export default NavbarNew