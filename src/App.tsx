import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { AppPath } from './layout/appRoutes';
import { NotFound } from './pages/NotFound';
import Home from './pages/Home'
import WhyUs from './pages/WhyUs';
import WhatWeOffer from './pages/WhatWeOffer';
import AccountingCost from './pages/AccountingCost';
import Contacts from './pages/Contacts';
import Impressions from './pages/Impressions';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
          <Switch>
                <Route path={AppPath.ROOT} exact component={Home} />
                <Route path={AppPath.WHYUS} component={WhyUs} />
                <Route path={AppPath.WHATWEOFFER} component={WhatWeOffer} />
                <Route path={AppPath.ACCOUNTINGCOST} component={AccountingCost} />
                <Route path={AppPath.CONTACTS} component={Contacts} />
                <Route path={AppPath.IMPRESSIONS} component={Impressions} />
                <Route path={AppPath.PRIVACY} component={Privacy} />
                <Route component={NotFound} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
