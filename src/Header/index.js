import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <Link class="navbar-brand" to="/">
            <p>
                <img class="brandImage" alt="Brand" src="superjuicelogo.png" height="25px" />
                <b> superjuice</b>
            </p>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <p class="navbar-text">Find sustainable companies in any category</p>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="navbar-link" to="/About" >About</Link>
                </li>
                <li class="nav-item">
                    <Link class="btn btn-default navbar-btn mySubmit myPanel" to="/submit">Submit</Link>
                </li>
            </ul>
        </div>
    </nav>
   
  );
}