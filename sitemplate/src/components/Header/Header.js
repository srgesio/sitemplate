import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import "./Header.css"
// import { Container } from './styles';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
                <div className="container">
                    <b>SITEMPLATE</b>
                </div>

            </header>
        );
    }
}
