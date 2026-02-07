import React, { useEffect, useState } from 'react'

export const Status = () => {

    const [status, setStatus] = useState(navigator.onLine)

    useEffect(() => {
        const online = () => setStatus(true)
        const offline = () => setStatus(false)

        window.addEventListener("online", online)
        window.addEventListener("offline", offline)

    }, [])






    // const [name, setName] = useState([])

    // useEffect(() => {
    //     fetch("/data.json")
    //         .then(res => res.json())
    //         .then(data => setName(data))
    // })

    // const color = ["green","blue","yellow","pink"]

    // const[index,setIndex] = useState(0)

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setIndex((num)=>(num+1)%color.length)
    //     },1000)
    // })
    return (
        <div>
            <h2>Status : {status ? "online" : "Offline"}</h2>

            {/* {name.map(item => (
                <div>
                    <p key={item.id}>{item.name}</p>
                    <p>{item.age}</p>
                </div>


            ))} */}

            {/* <div style={{ width: "150px", height: "150px", backgroundColor: color[index] }}>


            </div> */}



        </div>
    )
}
