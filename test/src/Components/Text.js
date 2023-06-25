import React, { useState } from 'react'

export default function Text(props) {


    const handleup = () => {
        let am = Text.toUpperCase()
        setText(am)
    }
    const handlelo = () => {
        let am = Text.toLowerCase()
        setText(am)
    }

    const handleclear = () => {
        let pm = ""
        setText(pm)

    }
    const handleco = () => {
        let copy = document.getElementById('mybox')
        copy.select();

        navigator.clipboard.writeText(copy.value);
    }
    const handlesp = () => {
        let extra =Text.split(/[ ]+/);
         setText(extra.join(" "))
    }

    const handlechange = (event) => {
        setText(event.target.value)
    }

    const [Text, setText] = useState("")
    return (
        <div>

            <div className="container mx-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className='form-control'  id='mybox' value={Text} onChange={handlechange} style={{backgroundColor: props.mode==='dark'? '#4c4255':'white' ,color: props.mode==='dark'? 'white':'black'}} rows={8} >  </textarea>
                <button className='btn btn-primary my-3 my-1 ' onClick={handleup}>Uppercase</button>
                <button className='btn btn-primary mx-2 my-1 ' onClick={handlelo}>Lowercase</button>
                <button className='btn btn-primary mx-2 my-1 ' onClick={handleco}>Copy text</button>
                <button className='btn btn-primary mx-2 my-1 ' onClick={handlesp}>Remove extra space</button>
                <button className='btn btn-primary mx-2 my-1 ' onClick={handleclear}>Clear text</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
                <h2>Text summary</h2>
                <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} Words and  {Text.length} Characters </p>
                <p>{0.008 * Text.split(" ").length} Minutes reading</p>
                <h2>Preview</h2>
               <p>{Text.length>0?Text:"Enter somethnig in the box"}</p>
            </div>

        </div>
    )
}
