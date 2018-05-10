import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

// import App from './App';
import { employee } from './reducer';
import EmployeeTable from './container/employeeTableContainer';


var rootReducer = combineReducers({employee});

const store = createStore(rootReducer,
	applyMiddleware(
	    ReduxThunk, 
	    logger
	  ));

ReactDOM.render(
	<Provider store={store}>
		<EmployeeTable />
	</Provider>
,document.getElementById('root'));
	
registerServiceWorker();
