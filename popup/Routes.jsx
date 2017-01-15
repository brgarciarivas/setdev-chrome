import React from 'react';
import { IndexRoute, Route } from 'react-router/lib';

import App from './components/App';
import Splash from './components/Splash';
import ContractList from './components/ContractList';
import PaymentReceived from './components/PaymentReceived';
import ContractItem from './components/ContractItem';
import SubmitDevAgreement from './components/SubmitDevAgreement';
import ContractSummary from './components/ContractSummary';
import AddNewIssue from './components/AddNewIssue';

export default(

    <Route path='/index.html' component={App}>
        <IndexRoute component={Splash}/>
       	<Route path='/ContractList' component={ContractList}/>
       	<Route path='/PaymentReceived' component={PaymentReceived}/>
       	<Route path='/ContractItem' component={ContractItem}/>
       	<Route path='/ContractSummary' component={ContractSummary}/>
       	<Route path='/AddNewIssue' component={AddNewIssue}/>
    </Route>

);