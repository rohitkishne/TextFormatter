import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("changed");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = ()=>{
        // console.log("changed");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    
    const handleClearClick = ()=>{
        // console.log("changed");
        let newText = '';
        setText(newText)
        props.showAlert("TextArea has been successfully cleared", "success")
    }
  
    const handleExtraSpaces = ()=>{
        // console.log("changed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed successfully", "success")
    }
   
    const handleCopy = ()=>{
        // console.log("changed");
        // let newText = document.getElementById("myBox"); // because we are using navigator API here.
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text has been Copied successfully", "success")
    }
   
    const handleOnChange = (event)=>{
        // console.log("changed to OnChange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text" // wrong way to change the state
    // setText("new text") // wrong way to change the state
    return (
        <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'#0c0b3c'}}>
            <h2>{props.heading} </h2>
            <div className="mb-2">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style = {{backgroundColor: props.mode==='dark'?'#070636':'white', color: props.mode==='dark'?'white':'#0c0b3c'}}
                    id="myBox"
                    rows="8"
                    placeholder="Enter Your Text Here"
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Change to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Change to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear All Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy to Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>

        <div className="container m-3 px-3" style = {{color: props.mode==='dark'?'white':'#0c0b3c'}}>
            <h2 >Your Text Details</h2>
            <p className="text-danger">{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p className="text-danger">{0.18 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes take to read a word</p>
            <h2 >Preview</h2>
            <p className="text-danger">{text.length>0?text:"Enter Your text to Preview Here"}</p>
        </div>
            
        </>
    );
}
