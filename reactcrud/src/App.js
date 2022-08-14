// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Ejemplo de CRUD con React</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Creación</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Indice</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Administrador de Empleados</h2> <br/>
          <Routes>
              <Route exact path='/create' element={<Create />} />
              <Route path='/edit/:id' element={ <Edit /> } />
              <Route path='/index' element={ <Index /> } />
          </Routes>
        </div>
    );
  }
}

export default App;

