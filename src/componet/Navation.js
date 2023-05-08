import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuOverlayContent from './MenuOverlayContent';

const Nav = styled.div`
  background-color: #A3BDFF;
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 360px;
  height: 48px;
`;

const Home = styled.img`
  margin-top: 15px;
  margin-left: 15px;
  width: 30px;
  height: 30px;
`;

const Menu = styled.img`
  margin-top: 15px;
  margin-right: 15px;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;

const MenuOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  z-index: 9999;
  transition: transform 0.3s ease-in-out;

  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "collapse")};

`;

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuOverlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOverlayRef.current && !menuOverlayRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <MenuContainer>
      <Nav>
        <Link to="/">
          <Home src="assets/home_logo.png" alt="Logo" />
        </Link>
        <Menu src="assets/menu.png" alt="menu" onClick={handleMenuToggle} />
      </Nav>
      <MenuOverlay isOpen={isOpen} ref={menuOverlayRef}>
        <CloseButton onClick={handleCloseMenu}>Close</CloseButton>
        <MenuOverlayContent handleCloseMenu={handleCloseMenu}/>
      </MenuOverlay>
    </MenuContainer>
  );
}

export default Navigation;
