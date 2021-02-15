import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo_icon.svg';

const LogoIcon = () => {
  return (
    <>
      <Link to="/">
        <img
          src={Logo}
          alt="Icono de Logo Pinimark"
          style={{ height: '40px' }}
        />
      </Link>
    </>
  );
};

export default LogoIcon;
