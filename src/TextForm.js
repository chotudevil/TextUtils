import React from "react";
import { useState } from "react";


export default function TextForm(props) {

    const handleUpClicked = () => {
        // console.log("Button clicked")
        if (text.length>0){
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
        }else{
          props.showAlert("Enter Something", "warning")
        }
    }

    const handleLoClicked = () => {
        // console.log("Button clicked")
        if (text.length>0){
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
      }else{
        props.showAlert("Enter Something", "warning")
      }
    }

    const handleOnChnaged = (event) => {
        // console.log("on changed")
        setText(event.target.value)
    }

    const handleClrClicked = (event) => {
      // console.log("on changed")
      setText("")
      props.showAlert("Clear", "success")
  }

    const handleCopy = (event) => {
      if (text.length>0){
      var copyText = document.getElementById("exampleFormControlTextarea1");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied to Clipboard", "success")
    }else{
      props.showAlert("Enter Something", "warning")
    }
      // alert("Copied the text: " + copyText.value);
  }

  const handleExtraSpaces = (event) =>{
    if (text.length>0){
    //const sentence = text.replace(/\s+/g, ' ').trim()
    let newText = text.split(/[  ]+/);    
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")}
    else{
      props.showAlert("Enter Something", "warning")
    }
  }
    const [text,setText] = useState("");
    let wordArr = text.split(" ")

    
  return (
    <> 
      <div className="mb-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChnaged}
          style={{
            backgroundColor : props.mode === 'light'?'white':'grey',
            color: props.mode === 'light'?'#042743':'white'
          }}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1 my-2" onClick={handleUpClicked}>
            Convert to Uppercase
      </button>

      <button className="btn btn-primary mx-1  my-2" onClick={handleLoClicked}>
            Convert to Lowercase
      </button>

      <button className="btn btn-primary mx-1  my-2" onClick={handleCopy}>
            Copy Text
      </button>

      <button className="btn btn-primary mx-1  my-2" onClick={handleClrClicked}>
            Clear 
      </button>

      <button className="btn btn-primary mx-1  my-2" onClick={handleExtraSpaces}>
            Remove Extra Space 
      </button>

      <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Preview Text Summary</h2>
        <p>{text.length >0?text:'No text Entered'}</p>
        <p>Words: {wordArr.filter(word => word !== '').length} and Characters: {text.length} .</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
      </div>

    </>
  );
}
