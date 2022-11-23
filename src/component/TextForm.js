import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange =(e)=>
    {
        // console.log('ON change');
        setText(e.target.value);
    }
    const handleUpClick =()=>
    {
        // console.log('Uppercase Button Click');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick =()=>
    {
        // console.log('Lowercase Button Click');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick=()=>
    {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been Removed!","success");
    }
    const [text,setText] = useState('')


    return (
        <>
            <div className="container form-group" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control mb-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#062552' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            <button className = "btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className = "btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className = "btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className = "btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className = "btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
            
            </div>
            <div className='container my-2' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.length === 0 ? text.split(" ").length=0 : text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Enter something to preview'}</p>

            </div>
        </>
    )
}
