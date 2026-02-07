import React, { useState } from 'react'


export const Task1 = () => {

    // const [password, setPassword] = useState("password")

    // const hide = () => {
    //     setPassword(password === "password" ? "text" : "password")
    // }
    // const [show,setShow] = useState("block")

    // const [show,setShow] = useState(true)

    // const box = {
    //     width: "200px",
    //     height: "200px",
    //     backgroundColor: "black",
    //     margin: "20px auto",
    //     display : show ? "block" : "none"
    // }


    // const showhide=()=>{
    //     setShow(!show)
    // }
    // const showhide = ()=>{
    //     setShow(show === "block" ? "none" : "block")
    // }

    const[login,setLogin] = useState(false)

    const loginn =()=>{
        setLogin(!login)
    }
    return (
        <div style={{textAlign : "center"}}>
            {/* <input type={password} placeholder='Enter your password' />
            <button onClick={hide}>{password === "password" ? "Show" : "Hide"}</button> */}
            {/* <button onClick={showhide}>{show? "Hide" : "Show"}</button>
            <div style={box}></div> */}

            {/* <div>
                {login? <p>You Are Logged IN!!!!!</p> : <p>You are Logged Out...Please Log In!!!!</p>}
                <button onClick={loginn}>{login? "Logout" : "Login"}</button>
            </div> */}
    
        </div>
    )
}
