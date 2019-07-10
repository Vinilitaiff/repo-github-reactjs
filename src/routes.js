import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
// exact server para definir exatamente o path escolido
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route parth="/" exact component={Main} />
        <Route parth="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
