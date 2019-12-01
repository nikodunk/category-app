import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">
                <p>
                    <img class="brandImage" alt="Brand" src="superjuicelogo.png" height="25px" />
                    <span style={{ fontWeight: 600, color: 'grey', marginLeft: 5 }}>whole earth catalog</span>
                </p>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <p class="navbar-text">Find sustainable companies in any category</p>
                <ul class="navbar-nav ml-auto">

                        <Link class="navbar-link" style={{color: 'grey', marginTop: 5}} to="/About" >About</Link>
                        <Link class="btn btn-outline btn-sm mySubmit myPanel"  style={{marginLeft: 10, marginTop: 0, paddingLeft: 12, paddingRight: 12}} to="/submit">Submit</Link>

                </ul>

        </nav>

    );
}