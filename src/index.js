import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './Web';
import Appointment from './components/Container/Appointment';
import {Provider}  from 'react-redux';
import store from './components/Container/Redux';
import {HashRouter, Routes, Route} from "react-router-dom";
import Services from './components/Container/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Web />} />
          <Route path='Services' element={<Services />} />
        <Route path='/appointment' element={<Appointment />} />

      </Routes>
    </HashRouter>
  </Provider>
);
