import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  justify-content: space-between;
  background-color: ${(props) => (props.scrolled ? 'rgb(255, 156, 0)' : 'transparent')};
  transition: background-color 0.5s ease;

  /* &:active {
    background-color: #ff9c00;
    transition-duration: 0.5s;
    transition-timing-function: ease;

    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  } */

  &:deactive {
    background-color: transparent;
    transition-duration: 0.5s;
    transition-timing-function: ease;

    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// Let's enjoy our trip. -> L.E.O.T
const Navber = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Nav scrolled={isScrolled}>
      <Logo to="/">L.E.O.T </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact US
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navber;
