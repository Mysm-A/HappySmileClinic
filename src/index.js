import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './Web';
import { Provider }  from 'react-redux' ;
import store  from './components/Container/Redux' ;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <Provider store={store}>  <Web /> </Provider>
);

