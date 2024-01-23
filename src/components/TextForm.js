import React, {useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
        document.title = 'TetxtUtils - UpperCase';
    }


    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!","success");
      document.title = 'TetxtUtils - LowerCase';
    }
    const handleClrClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared!","success");
      document.title = 'TetxtUtils - Text Cleared';
    }

    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text = document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard!","success");
      document.title = 'TetxtUtils - Text Copied';

  }
    const handleSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed","success");
      document.title = 'TetxtUtils - Extra Space Removed';
  }



    const [text,setText] = useState('');
    
    
    
  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>
        
        
        
        
    </div>
    <div className="container my-2" style ={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{text.split(".").length-1}sentences</p>
      <p>{0.08 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
