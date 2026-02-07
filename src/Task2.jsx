import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const Task2 = () => {

    // const [color, setColor] = useState("red")

    // const changecolor = () => {
    //     setColor(color === "red" ? "yellow" : color === "yellow" ? "green":"red")

    //     if(color==="red") setColor("yellow")
    //         else if (color === "yellow") setColor("green")
    //     else setColor("red")
    // }



    const quotes = [
        "Hi",
        "Hello",
        "How Are You ?",
        "Have a Nice Day",
        "Thank You",
        "Good Bye!!!"
    ]

    // const [quote, setQuote] = useState(quotes[0])

    // const changequote = () => {
    //     const random = Math.floor(Math.random() * quotes.length)
    //     setQuote(quotes[random])
    // }

    const [index, setIndex] = useState(0)

    const changequote = () => {
        setIndex((n) => (n + 1) % quotes.length)
Swal.fire("SweetAlert2 is working!");
    }



    return (
        <div style={{ textAlign: "center" }}>
            <h2>{quotes[index]}</h2>
            <button onClick={changequote}>Change</button>

            {/* <h2>{quote}</h2>
            <button onClick={changequote}>Generate Quote</button> */}

            {/* <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                borderRadius : "50%",
                margin: "20px auto"
            }}>
            </div>
            <button onClick={changecolor}>ChangeColor</button> */}



        </div>
    )
}
