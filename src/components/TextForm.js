import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    textUpdate(newtext);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handledownClick = () => {
    console.log("LowerCase was Clicked");
    let newtext = text.toLocaleLowerCase();
    textUpdate(newtext);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    console.log("Clear button was Clicked");
    textUpdate("");
    props.showAlert("Text Area Cleared", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    textUpdate(event.target.value);
  };

  const handleReverseClick = () => {
    let revtext = text.split("").reverse().join("");
    textUpdate(revtext);
    props.showAlert("Text Reversed", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const [text, textUpdate] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary me-2" onClick={handledownClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary me-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary me-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary me-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{(text.split(" ").length - 1) * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length === 0 ? "Enter your text to preview it here" : text}</p>
      </div>
    </>
  );
}
