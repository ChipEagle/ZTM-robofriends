import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots)

// Error: Error_Question_Section_19_Lecture_205.txt
ReactDOM.render(
                <Provider store = { store }>
                  <App />
                </Provider>, document.getElementById('root'));

// ReactDOM.render(<App store = { store } />, document.getElementById('root'));

registerServiceWorker();
