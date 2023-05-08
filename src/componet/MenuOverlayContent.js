import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 70px;
`;

const MenuButton = styled(Link)`
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 20px;
  color: #000;
  width: 120px;
  text-align: center;
  text-decoration: none;
`;

const Title=styled.h1`
margin:0;

`;
function MenuOverlayContent({ handleCloseMenu }) {
  return (
    
    <MenuContainer>
        <Title>Diets</Title>
      <MenuButton to="/dietscreen" onClick={handleCloseMenu}>식단</MenuButton>
      <MenuButton to="/exercisescreen" onClick={handleCloseMenu}>운동</MenuButton>
      <MenuButton to="/datescreen" onClick={handleCloseMenu}>날짜</MenuButton>
    </MenuContainer>
  );
}

export default MenuOverlayContent;
