import {
  HashRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import Inicio from '../components/inicio/Inicio';
import Welcome from '../components/sign_in/Welcome';
import Register from '../components/sign_in/Register';
import Login from '../components/sign_in/Login';
import IsAuthContext from '../context/isAuthContext';
import '../styles/styles.css';


function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);
  const [usersDb, setUsersDb] = useState([]);

  useEffect(() => {
    (async () => {
      const datos = await getDocs(collection(db, 'usuarios'));
      let users = [];
      datos.forEach(documento => { users.push(documento.data()) });
      setUsersDb(users);
    })();

  }, []);

  console.log(usersDb);

  //? CON EL CONTEXO ES NECESARIO isAthenticathed ??????

  return (
    <IsAuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
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
            usersDb={usersDb}
            isAuthenticated={isAuth}
          />
          <PublicRouter
            exact
            path='/auth/login'
            component={Login}
            usersDb={usersDb}
            isAuthenticated={isAuth}
          />
          <PrivateRouter
            exact
            path='/'
            component={Inicio}
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
