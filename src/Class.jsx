import React, { useEffect, useState } from 'react'

export const Class = () => {


    const [data, setData] = useState(0)

    const click = () => {
        setData(data + 1)
    }


    const names = ["Jeeva", "Karthi", "Santhosh", "Sreeram"]

    // const numbers = [1,2,3,4,5]

    useEffect(() => {
9
    },[value])


    return (
        <div>
            <h2>{data}</h2>

            {/* <button onClick={click}>Inc</button>

         <ul>
            {names.map((k,index) =>(
                <li key={index}>{k}</li>
            ))}
         </ul> */}


            {/* <ul>
            {names.forEach((item,index)=>(
                <li key={index}>{item}</li>
            ))}
         </ul> */}






        </div>
    )
}
