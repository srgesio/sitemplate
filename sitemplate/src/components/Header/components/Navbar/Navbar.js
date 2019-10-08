import React, { Component } from 'react';
import './Navbar.css';

// import { Container } from './styles';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <b>LOGO</b>

                <div className="menu">
                    <a href="#">Início</a>
                    <a href="#">Conheça a NODA</a>
                </div>
            </nav>
        );
    }
}