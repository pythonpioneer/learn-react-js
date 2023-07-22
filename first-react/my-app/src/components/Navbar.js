// importing required packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * This component represent Navigation bar.
 * @param {string} title - The title of the Navbar.
 * @param {string} first - The very first menu of the Navbar.
 * @param {string} second - The second menu of the Navbar. 
 * @param {string} colorMode - This define the color mode for the app
 * @returns {JSX.Element} - A JSX element representing the Navbar.
 */
export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.colorMode} bg-${props.colorMode}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">{props.first}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.second}</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.toggleMode} type="button">{props.colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
                </div>
            </nav>
        </>
    );
}

// Here, we will define the types of all props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    first: PropTypes.string,
    second: PropTypes.string,
    colorMode: PropTypes.string,
}

// setting default values in the Navbar
Navbar.defaultProps = {
    // title: 'title',  // this field is required, no default value needed
    first: 'menu1',
    second: 'menu2',
    colorMode: 'light',
}