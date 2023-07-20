import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Translation } from "react-i18next";

/**
 * This component represent an Input area/field.
 * @param {string} heading - This is the heading for the input field. 
 * @param {number} size - It reprsent the number of rows given to textarea. 
 * @returns {JSX.Element} - A JSX element representing Input field.
 */
export default function TextForm(props) {

    // creating state for text area
    const [text, setText] = useState("Text");

    // handling event for text area
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // handling event, when clicked on "convert to uppercase"
    const handleUpCase = () => {
        setText(text.toUpperCase());
    }

    // handling event, when clicked on "convert to lowercase"
    const handleLowCase = () => {
        setText(text.toLowerCase());
    }

    // handling event, when clicked on "remove"
    const handleRemove = () => {
        setText('');
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <div className="container">
                        <h2>{props.heading}</h2>
                        <textarea type="text" className="form-control" id="my-box" onChange={handleOnChange} rows={props.size} value={text}></textarea>
                    </div>
                </div>
            </form>
            <div className="container">
                <button type="button" class="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="button" class="btn btn-secondary" onClick={handleLowCase}>Convert to Lowercase</button>
                <button type="button" class="btn btn-success" onClick={handleRemove}>Remove</button>
                <button type="button" class="btn btn-danger">Hindi</button>
                <button type="button" class="btn btn-warning">English</button>
                <button type="button" class="btn btn-info">Spanish</button>
                <button type="button" class="btn btn-dark">French</button>
            </div>
        </>
    );
}

// defining the type of the poperties
TextForm.propTypes = {
    heading: PropTypes.string,
    size: PropTypes.number,
}

// setting the default value for the properties
TextForm.defaultProps = {
    heading: "Enter your text here",
    size: 10,
}