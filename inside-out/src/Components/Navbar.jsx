import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">
        Aleksandr<span>Gorbach</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
      </Hamburger >
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Inside Out</MenuLink>
        <MenuLink href="/Pen to paper">Pen to Paper</MenuLink>
        <Modal />
        <MenuLink href="https://www.mentalhealth.gov/" target="_blank">Help</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px){
    display: flex;

  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover{
    color: #7b7fda;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`

export default Navbar;