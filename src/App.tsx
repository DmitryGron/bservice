import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { AppPath } from './layout/appRoutes';
import { NotFound } from './pages/NotFound';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
          <Switch>
                <Route path={AppPath.ROOT} component={Home} />
                {/* <Route path={AppPath.WHYUS} component={} />
                <Route path={AppPath.WHATWEOFFER} component={} />
                <Route path={AppPath.ACCOUNTINGCOST} component={} />
                <Route path={AppPath.CONTACTS} component={} />
                <Route path={AppPath.IMPRESSION} component={} />
                <Route path={AppPath.PRIVACY} component={} /> */}
                <Route component={NotFound} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
