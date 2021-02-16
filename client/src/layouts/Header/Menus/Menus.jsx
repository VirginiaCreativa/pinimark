import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Variables from '../../../styles/VariableStyled';

const MenuStyled = styled.div`
  position: relative;
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  .bx {
    color: ${Variables.grey3};
    font-size: 18px;
    &:hover {
      color: ${Variables.blue1};
    }
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 170px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  ul {
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 0;
        padding-top: 10px;
        border-top: 1px dotted ${Variables.grey0};
      }
      i {
        position: relative;
        top: 2px;
        margin-right: 10px;
        color: ${Variables.grey1};
      }
    }
  }
`;

const Menus = () => {
  const [btnSubMenu, setBtnSubMenu] = useState(false);

  useEffect(() => {
    const boxSubMenu = document.querySelector('body');
    if (boxSubMenu) {
      boxSubMenu.addEventListener('mouseover', (ev) => {
        if (ev.layerY >= 112) {
          setBtnSubMenu(false);
        }
      });
    }
  });

  return (
    <MenuStyled>
      <Button type="button">
        <i className="bx bx-bookmark"></i>
      </Button>
      <Button type="button" onClick={() => setBtnSubMenu(!btnSubMenu)}>
        <i className="bx bx-user"></i>
      </Button>
      {btnSubMenu && (
        <SubMenu className="boxSubMenu">
          <ul className="list-unstyled">
            <li>
              <i className="bx bx-bookmarks"></i>
              <Link to="marcadores">Mis marcadores</Link>
            </li>
            <li>
              <i className="bx bxs-cog"></i>
              <Link to="configuracion">Configuración</Link>
            </li>
            <li>
              <i className="bx bx-exit"></i>
              <Link to="logout">Salir</Link>
            </li>
          </ul>
        </SubMenu>
      )}
    </MenuStyled>
  );
};

export default Menus;
