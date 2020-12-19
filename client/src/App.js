import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import UpdateProduct from './views/UpdateProduct';
import Main from './views/Main';

function App() {
  return (
    <div className="App"> 
    <h1> This is a Product Manager App. 
    </h1>
    <p>Navigate to /products/ to see available products</p>
      <Router>       
        <Main path="products/" />
        <Detail path="products/:id" />
        <UpdateProduct path="products/:id/edit/"/>
      </Router>

    </div>
  );
}

export default App;
