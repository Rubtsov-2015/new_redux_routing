import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';
import allReducers from "./reducers";
import App from './components/App'

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>,

	document.getElementById('root')
);
registerServiceWorker();
