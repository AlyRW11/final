import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo'
import Client from './Client'

ReactDOM.render(
<ApolloProvider client={Client}>
<BrowserRouter>
<App /> 
</BrowserRouter>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
