import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    static propTypes = {
    };


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="#">GetYourNews</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={this.props.handleCategory}>Business</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" onClick={this.props.handleCategory} to="/sports">sports</Link>
                                    <Link className="dropdown-item" onClick={this.props.handleCategory} to="/entertainment">entertainment</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" onClick={this.props.handleCategory} to="/health">health</Link>
                                    <Link className="dropdown-item" onClick={this.props.handleCategory} to="/science">science</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Disabled</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;