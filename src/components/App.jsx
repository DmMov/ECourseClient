import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// * Components
import { Loader } from './Loader/Loader';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

// * Hooks
import { useRoutes } from '../routes';
import { useAuth } from '../hooks/auth.hook';

// * Context
import { AuthContext } from '../context/AuthContext';

// * Styles
import './App.scss';

export const App = () => {
  const { login, logout, userData, ready } = useAuth();
  const routes = useRoutes(userData);

  if (!ready)
    return <Loader />;

  return <AuthContext.Provider value={{
    login, logout, userData
  }}>
    <Router>
      <div id="app">
        <Header />
        {routes}
        <Footer />
      </div>
    </Router>
  </AuthContext.Provider>;
}