import React, { useCallback, useState } from 'react'
import  Child  from './Child';

export const Callback = () => {


    const [count, setCount] = useState(0)

    // const click =() =>{
    //     console.log("Button Clicked");    
    // }

    const click = useCallback(() => {
        console.log("Button Clicked");

    },[])
    return (
        <div>


            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Child props={click}></Child>

        </div>
    )
}






