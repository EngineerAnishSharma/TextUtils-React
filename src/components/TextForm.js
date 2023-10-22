import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick=()=>{
        // console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

   const handleClear=()=>{
    setText("");
    props.showAlert("Clear textbox","success");
   }

    const handleOnChange=(event)=>{
        // console.log("changing");
        setText(event.target.value);

    }

    const handleCopy=()=>{
        // var newText=document.getElementById('exampleFormControlTextarea1');
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy the text","success");
    }

    const handleRemoveExtraSpace=()=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space!","success");
    }

    const [text,setText]=useState("");
  return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Write here' value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div> 
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear} >Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleRemoveExtraSpace} >Remove spaces</button>
            
            
        </div>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>your Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} character</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
