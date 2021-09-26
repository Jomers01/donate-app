import {
  HashRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import React, { useState } from 'react';
import IsAuthContext from '../context/isAuthContext';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import Welcome from '../containers/Welcome';
import Register from '../containers/Register';
import Login from '../containers/Login';
import Inicio from '../containers/Inicio';
import Perfil from '../containers/Perfil';
import Crear from '../containers/Crear';


function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);
  const [currUserBasicInfo, setCurrUserBasicInfo] = useState({});

  return (
    <IsAuthContext.Provider value={{
      isAuth: isAuth,
      setIsAuth: setIsAuth,
      currUserBasicInfo,
      setCurrUserBasicInfo
    }}>
      <Router>
        <Switch>
          <PublicRouter
            exact
            path='/auth'
            component={Welcome}
            isAuthenticated={isAuth}
          />
          <PublicRouter
            exact
            path='/auth/register'
            component={Register}
            isAuthenticated={isAuth}
          />
          <PublicRouter
            exact
            path='/auth/login'
            component={Login}
            isAuthenticated={isAuth}
          />
          <PrivateRouter
            exact
            path='/'
            component={Inicio}
            isAuthenticated={isAuth}
          />
          <PrivateRouter
            exact
            path='/crear'
            component={Crear}
            isAuthenticated={isAuth}
          />
          <PrivateRouter
            exact
            path='/perfil'
            component={Perfil}
            isAuthenticated={isAuth}
          />

          {isAuth
            ? <Redirect to='/auth' />
            : <Redirect to='/' />
          }
        </Switch>
      </Router>
    </IsAuthContext.Provider>
  );
}

export default AppRouter;
