import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

// import App from './App';
import { employee } from './reducer';
import EmployeeTable from './container/employeeTableContainer';
import rootsaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
var rootReducer = combineReducers({employee});

const store = createStore(rootReducer,
	applyMiddleware(
	    sagaMiddleware, 
	    logger
	  ));

sagaMiddleware.run(rootsaga)

ReactDOM.render(
	<Provider store={store}>
		<EmployeeTable />
	</Provider>
,document.getElementById('root'));
	
registerServiceWorker();
