import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
// import './styles/index.css';
// import './styles/inicio.css';
// import './styles/login.css';
// import './styles/normalize.css';
// import './styles/register.css';
// import './styles/welcome.css'

ReactDOM.render (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
