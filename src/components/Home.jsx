import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './components/Dashboard';
import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    
    
    <div>
    <Button>Bootstrap Button</Button>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand</a>
      </div>
    </nav>

    <div className="container mt-4">
      <div className="jumbotron p-5 mb-4 bg-light rounded-3 bg-dark">
        <div className="container">
          <h1 className="display-5">Welcome</h1>
          <p>This is a simple hero unit with Bootstrap 5.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="p-3 bg-primary text-white">
                <Login />
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-secondary text-white">
          <Signup />
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-success text-white">Column 3</div>
        </div>
      </div>
    </div>
  </div>

    



  );
};

export default Home; 