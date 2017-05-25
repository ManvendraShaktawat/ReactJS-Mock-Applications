import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes.jsx';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('app'));