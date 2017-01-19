import React from 'react';
import { IndexRoute, Route } from 'react-router/lib';

import App from './components/App';
import Splash from './components/Splash';



export default(

    <Route path='/index.html' component={App}>
        <IndexRoute component={Splash}/>
       	
    </Route>

);