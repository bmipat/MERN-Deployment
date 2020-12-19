import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import UpdateProduct from './views/UpdateProduct';
import Main from './views/Main';

function App() {
  return (
    <div>      
      <Router>       
        <Main path="products/" default/>
        <Detail path="products/:id" />
        <UpdateProduct path="products/:id/edit/"/>
      </Router>

    </div>
  );
}

export default App;
