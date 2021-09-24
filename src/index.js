import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import moment from 'moment';
import 'moment/locale/es';
import './styles/index.css';
import './styles/reset.css';

moment.locale('es');

ReactDOM.render (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
 