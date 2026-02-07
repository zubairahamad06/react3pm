import React, { use, useState } from 'react'

export const Task = () => {

    const [page, setPage] = useState(1)


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        id: ""
    })


    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const next = () => setPage(page + 1)
    const prev = () => setPage(page - 1)

    const submit = (e) => {
        alert("Form submitted successfully")
        setPage(page + 1)
    }

    return (
        <div>

            {page === 1 && (

                <div>
                    <h2>Form 1</h2>

                    <input type="text" name="name" value={form.name} placeholder='Enter your name' onChange={handlechange} />
                    <input type="email" name="email" value={form.email} placeholder='Enter your Email' onChange={handlechange} />
                    <input type="number" name="phone" value={form.phone} placeholder='Enter your number' onChange={handlechange} />
                    <button onClick={next}>Next</button>

                </div>

            )}


            {page === 2 && (
                <div>

                    <h2>Form 2</h2>


                    <input type="text" name="role" value={form.role} placeholder='Enter your role' onChange={handlechange} />
                    <input type="number" name="id" value={form.id} placeholder='Enter your id' onChange={handlechange} />
                    <button onClick={next}>next</button>
                    <button onClick={prev}>Prev</button>
                </div>
            )}


            {page === 3 && (
                <div>
                    <h2>Name : {form.name}</h2>
                    <h2>Number : {form.phone}</h2>
                    <h2>Email : {form.email}</h2>
                    <h2>Role : {form.role}</h2>
                    <h2>ID : {form.id}</h2>
                    <button onClick={prev}>Prev</button>
                    <button onClick={submit}>Submit</button>
                </div>
            )}

            {page === 4 && (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Your response submitted successfully</h1>
                </div>
            )}




        </div>
    )
}
