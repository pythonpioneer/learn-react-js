import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * This component represent an Input area/field.
 * @param {string} heading - This is the heading for the input field. 
 * @param {number} size - It reprsent the number of rows given to textarea. 
 * @param {string} colorMode - This define the color mode for the app.
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
        props.showAlertMsg("Converted into uppercase", 'success');
    }

    // handling event, when clicked on "convert to lowercase"
    const handleLowCase = () => {
        setText(text.toLowerCase());
        props.showAlertMsg("Converted into lowercase!", 'success');
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

        // when there is no text in textarea
        if (copiedText.value.length > 0)
            props.showAlertMsg("Copied!", 'success');
        else props.showAlertMsg("Not Copied!", 'danger');
    }

    // these language changing function will be created later
    const handleAlert = () => {
        props.showAlertMsg("Not Created, Yet!!", 'info');
    }

    // creating a method to handle html to jsx converter
    const convertHtmlToJsx = () => {
        // const jsxCode = htmlToJSX(text);
        // console.log(jsxCode);
        // console.log(text);
    }


    return (
        <div style={{ backgroundColor: props.colorMode === 'dark' ? 'darkslategray' : 'white' }}>

            <form>
                <div className="form-group" >
                    <div className="container">
                        <h2 style={{ color: props.colorMode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
                        <textarea type="text" className="form-control" id="my-box" onChange={handleOnChange} rows={props.size} value={text} style={{ backgroundColor: props.colorMode === 'dark' ? 'darkslategray' : 'white', color: props.colorMode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                </div>
            </form>
            <div className="container" style={{
                backgroundColor: props.colorMode === 'dark' ? 'darkslategray' : 'white'
            }}>

                <button type="button" className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-secondary" onClick={handleLowCase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-danger" onClick={handleRemove}>Remove</button>
                <button type="button" className="btn btn-success" onClick={handleCopy}>Copy</button>
                <button type="button" className="btn btn-warning" onClick={handleAlert}>English</button>
                <button type="button" className="btn btn-info" onClick={handleAlert}>Spanish</button>
                <button type="button" className="btn btn-dark" onClick={convertHtmlToJsx}>Convert HTML to JSX</button>

                <div className='container' style={{
                    backgroundColor: props.colorMode === 'dark' ? 'darkslategray' : 'white', color: props.colorMode === 'dark' ? 'white' : 'black',
                    height: '100%'
                }}>
                    {text.split(" ").length - 1} words and {text.length} characters
                </div>
            </div>
        </div>
    );
}

// defining the type of the poperties
TextForm.propTypes = {
    heading: PropTypes.string,
    size: PropTypes.number,
    colorMode: PropTypes.string,
}

// setting the default value for the properties
TextForm.defaultProps = {
    heading: "Enter your text here",
    size: 10,
    colorMode: 'light',
}

// function htmlToJSX(html) {
//     // Replace self-closing tags in HTML with equivalent JSX tags
//     const jsx = html.replace(/<(\w+)\s*\/>/g, '<$1 />');

//     // Replace attributes in HTML tags with equivalent JSX attributes
//     const jsxWithAttributes = jsx.replace(/(\w+)=(["'])(.*?)\2/g, '$1={$3}');

//     // Replace class attributes with className in JSX
//     const jsxWithClassName = jsxWithAttributes.replace(/class=/g, 'className=');

//     // Replace for attributes with htmlFor in JSX
//     const jsxWithHtmlFor = jsxWithClassName.replace(/for=/g, 'htmlFor=');

//     return jsxWithHtmlFor;
// }

//   // Example usage
//   const htmlCode = '<div class="container"><h1>Title</h1><p>Hello, world!</p></div>';
//   const jsxCode = htmlToJSX(htmlCode);
//   console.log(jsxCode);

