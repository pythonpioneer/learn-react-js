// importing required packages
import React from 'react'
import PropTypes from 'prop-types'

/**
 * This component represent Navigation bar.
 * @param {string} title - The title of the Navbar.
 * @param {string} first - The very first menu of the Navbar.
 * @param {string} second - The second menu of the Navbar. 
 * @returns {JSX.Element} - A JSX element representing the Navbar.
 */
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">{props.first} <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.second}</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
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