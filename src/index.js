import 'bootstrap/dist/css/bootstrap.min.css';
import { createHashHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { fetchCategories } from './actions/categories';
import { fetchProducts } from './actions/products';
import App from './App';
import { categoryApi } from './gateways/CategoryApi';
import './index.css';
import reducers from './reducers';


const history = createHashHistory();
const deps = {history, categoryApi};

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(deps))));
store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

ReactDOM.render(
	<div className="content">
		<div className="container">
			<Provider store={store}>
				<Router history={history}>
					<App/>
				</Router>
			</Provider>
		</div>
	</div>,
	document.getElementById('root')
);
