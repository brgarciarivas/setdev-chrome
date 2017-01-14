import React from 'react';
import { IndexRoute, Route } from 'react-router/lib';

import App from './components/App';


export default(

    <Route path='/index.html' component={App}>
        <IndexRoute component={App}/>
       
    </Route>

);