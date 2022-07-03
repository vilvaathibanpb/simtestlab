import styled from 'styled-wind';
import {
  Link
} from "react-router-dom";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { menu_items } from "../../data/basic_details";

const MenuItems = styled.div`
  .bg-white;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  .fixed;
  .top-0;
  .left-0;
  .text-pdark;
  .flex;
  .flex-col;
  .justify-around;
  .items-center;
  font-size: 18px;
  font-weight: 700;
  animation: show-menu 0.25s;

  @keyframes show-menu {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;

const Close = styled.div`
  .lg: hidden;
  .absolute;
  .top-0;
  .right-0;
  .pr-8;
  .pl-8;
  .pt-4;
  .pb-4;
  .text-pdark;
`;

const Menu = styled.div`
  .text-sdark;
  border-radius: 10px;
  .p-4;
  ${(props) => props.active && `.text-pwhite; .bg-sdark;`}
`;

const SideMenu = ({ showMenu, closeMenu, path }) => {
  return (
    <>
      {showMenu && (
        <MenuItems>
          <Close onClick={() => closeMenu(false)}>
          <FontAwesomeIcon icon={faXmark} />
          </Close>
          {menu_items.map((menu, index) => (
            <Link to={`/${menu}`} key={index} onClick={() =>  closeMenu(false) }>
              <Menu active={path === `/${menu}`}>
                {menu.toUpperCase().replace("-", " ")}
              </Menu>
            </Link>
          ))}
        </MenuItems>
      )}
    </>
  );
};

export default SideMenu;
