import React, { useState } from 'react';

export default function TextFormat(props) {
    const [text, setText] = useState
        ("Enter the Text");

    const handleUPClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowCase = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
        
    };

    const handleClrText = () => {
        setText('');
        
    };

    const handleFrstText = () => {
        let sentences = text.split('. ').map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        });
        setText(sentences.join('. '));
        
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.trim().split(/\s+/).length;
    const timeToRead = 0.008 * wordCount;

    return (
        <>
            <div className="container" style={{   color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUPClicked}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClrText}>Clear the text</button>
                <button className="btn btn-primary mx-2" onClick={handleFrstText}>Capitalize Sentences</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text Summary</h1>
                <p>{wordCount} words and {text.length} characters</p>
                <h1>Estimated Reading Time</h1>
                <p>{timeToRead.toFixed(2)} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}

