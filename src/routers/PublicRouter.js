import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRouter({ isAuthenticated, component: Component, usersDb, ...rest }) {
  return (
    <Route {...rest}
      component={(props) => (
        (isAuthenticated)
          ? (<Redirect to="/" />)
          : (<Component {...props} usersDb={usersDb}/>)
      )}
    />
  )
}

export default PublicRouter;
