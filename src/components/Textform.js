import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
       //console.log("Uppercase was clicked");
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        //console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
     }
    const clear=()=> {
    //console.log("Lowercase was clicked");
    let newText = '';
    setText(newText);
    props.showAlert("text is cleared","success");
  }
    
    const handleCopy=()=>{
      var text=document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text is coppied","success");
   }
   const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
 }
    const [text, setText] = useState('');
    //setText("new text");//correct way to change the state
  return (
      <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}} >
        <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear the text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the textbox above to previewit here"}</p>
    </div>
    </>
  )
}
