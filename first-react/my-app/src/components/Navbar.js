// importing required packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * This component represent Navigation bar.
 * @param {string} title - The title of the Navbar.
 * @param {string} first - The very first menu of the Navbar.
 * @param {string} second - The second menu of the Navbar. 
 * @returns {JSX.Element} - A JSX element representing the Navbar.
 */
export default function Navbar(props) {

    // defining the state of the color
    const [colorModeStyle, setColorModeStyle] = useState({
        color: 'gray',
        backgroundColor: 'white',
    });

    const [btnText, setBtntext] = useState("Dark Mode");

    // writing a function for enabling dark mode
    const handleColorMode = () => {
        if (colorModeStyle.color === 'white') {
            setColorModeStyle({
                color: 'gray',
                backgroundcolor: 'white',
            });
            setBtntext("Dark Mode");
        }
        else {
            setColorModeStyle({
                color: 'white',
                backgroundColor: 'gray',
            });
            setBtntext("Light Mode");
        }
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg" style={colorModeStyle} >
                <a className="navbar-brand" href="/" style={colorModeStyle}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/" style={colorModeStyle}>{props.first}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={colorModeStyle}>{props.second}</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleColorMode} type="button">{btnText}</button>
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
}

// setting default values in the Navbar
Navbar.defaultProps = {
    // title: 'title',  // this field is required, no default value needed
    first: 'menu1',
    second: 'menu2',
}