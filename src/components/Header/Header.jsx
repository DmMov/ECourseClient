import React, { useContext } from 'react';
import { Button } from 'antd';

// * Components
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { UserBox } from '../UserBox/UserBox';

// * Context
import { AuthContext } from '../../context/AuthContext';

// * Styles
import './Header.scss';

export const Header = () => {
  const { userData, logout } = useContext(AuthContext);

  return <header className="header">
    <Logo color="black" />
    {
      userData && <>
        <Navbar role={userData.role} />
        <UserBox {...userData} />
        <Button className="btn logoutBtn" onClick={() => logout()}>
          logout
        </Button>
      </>
    }
  </header>;
}