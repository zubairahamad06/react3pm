import React, { useEffect, useRef, useState } from 'react'

export const Refer = () => {


    const myref = useRef(null)

    const [text, setText] = useState("")

    const inputtag = () => {
        myref.current.focus()
        console.log(myref.current.value);

    }

    const showtext = () => {
        setText(myref.current.value)
    }



    const count = useRef(0)

    const handleclick = () => {
        count.current = count.current + 1
        console.log(count.current);

    }


    // const [text, setText] = useState("")
    const prevtext = useRef("")

    useEffect(() => {
        prevtext.current = text;
    })



    return (
        <div>
            <input type="text" placeholder='Enter something' ref={myref} />
            <button onClick={inputtag}>Click me</button>


            <h2>{text}</h2>
            <button onClick={showtext}>Show</button>


            <h2>{count.current}</h2>
            <button onClick={handleclick}>Click me</button>

            <input type="text" placeholder="Enter something" onChange={(e) => setText(e.target.value)} />


            <p>Current : {text}</p>
            <p>Previous : {prevtext.current}</p>
        </div>
    )
}
