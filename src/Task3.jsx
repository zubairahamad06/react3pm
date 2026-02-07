import React, { useState } from 'react'

export const Task3 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState({ name: "", email: "" })


    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted({ name, email })
        setName("")
        setEmail("")
    }
    return (
        <div>

            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Submit</button>
            </form>


            <h2>Name : {submitted.name}</h2>
            <h2>Email : {submitted.email}</h2>
        </div>
    )
}
