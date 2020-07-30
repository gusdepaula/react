import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);