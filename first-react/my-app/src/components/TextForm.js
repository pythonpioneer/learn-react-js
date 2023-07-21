import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

    // handling event, when clicked on "copy"
    const handleCopy = () => {
        const copiedText = document.getElementById('my-box');
        // copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
    }

    // these language changing function will be created later
    const handleAlert = () => {
        alert('It Will be Created Later');
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
                <button type="button" className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-secondary" onClick={handleLowCase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-danger" onClick={handleRemove}>Remove</button>
                <button type="button" className="btn btn-success" onClick={handleCopy}>Copy</button>
                <button type="button" className="btn btn-warning" onClick={handleAlert}>English</button>
                <button type="button" className="btn btn-info" onClick={handleAlert}>Spanish</button>
                <button type="button" className="btn btn-dark" onClick={handleAlert}>French</button>
            </div>
            <p className='container'>
                {text.split(" ").length-1} words and {text.length} characters
            </p>
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