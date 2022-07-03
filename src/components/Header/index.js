import styled from 'styled-wind';
import {
  Link, useLocation
} from "react-router-dom";
import logo from "../../images/logo.jpg";
import { useState } from "react";
import SideMenu from "../SideMenu";
import { menu_items } from "../../data/basic_details";

const Container = styled.div`
  .flex;
  .justify-between;
  .pl-4;
  .pr-4;
  .lg: pl-12;
  .lg: pr-12;
  .pl-4;
  .pr-4;
  .items-center;
`;
const LogoContainer = styled.div`
  .cursor-pointer;
  .flex;
  .items-center;
  .lg: mr-8;
  font-weight: bold;
  font-size: 18px;
  .text-pwhite;
`;
const Logo = styled.img`
  height: 100px;
`;

const MenuContainer = styled.div`
  .hidden;
  .lg: flex;
  .justify-between;
  .w-7/12;
  .text-pwhite;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  .lg: hidden;
  .text-4xl;
  .cursor-pointer;
`;

const Menu = styled.div`
  .cursor-pointer;
  .text-sdark;
  font-weight: bold;
  font-size: 18px;
  .hover: bg-sdark;
  .hover: text-pwhite;
  border-radius: 10px;
  ${(props) => { return (props.active && `background: #2d2d2d; color: white;`)}}
  .p-4;
  .flex;
  .items-center;
`;

const Header = () => {
  const router = useLocation();
  const [showMenu, toggleMenu] = useState(false);
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} alt="SIMTEST LAB" />
        </Link>
      </LogoContainer>
      <MenuContainer>
        {menu_items.map((menu, index) => (
          <Link to={`/${menu}`} key={index}>
            <Menu active={router.pathname === `/${menu}`}>
              {menu.toUpperCase().replace('-', ' ')}
            </Menu>
          </Link>
        ))}
      </MenuContainer>
      <MobileMenu onClick={() => toggleMenu(true)}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#2d2d2d">
          <rect width="100" height="10" rx="8"></rect>
          <rect y="30" width="100" height="10" rx="8"></rect>
          <rect y="60" width="100" height="10" rx="8"></rect>
        </svg>
      </MobileMenu>
      <SideMenu
        path={router.pathname}
        closeMenu={toggleMenu}
        showMenu={showMenu}
      />
    </Container>
  );
};

export default Header;
