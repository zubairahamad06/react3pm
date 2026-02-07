import React, { useEffect, useState } from 'react'

export const Effect = () => {

    //   1.Useeffect without dependency
    //   2.Useeffect with dependency
    //   3.Useeffect with dependency value
    const [count, setCount] = useState(3)
    const [num, setNum] = useState(0)

    // const incr = () => {
    //     setCount(count + 1)
    // }
    // const incre = () => {
    //     setNum(num + 1)
    // }


    // useEffect(() => {
    //     console.log("Component Rendered");
    // })


    // useEffect(() => {
    //     console.log("Component Rendered");
    // }, [])

    // useEffect(() => {
    //     console.log("Count",count);
    // }, [count])

    // useEffect(() => {
    //     console.log("Number",num);
    // }, [num])


    useEffect(()=>{
        if(count === 0){
            document.body.style.backgroundColor = "red"
            return
        }
        const timer = setTimeout(()=>{
            setCount(count-1)
        },1000)

        return () =>clearTimeout(timer)
    },[count])



    return (
        <div>
            <h2>{count}</h2>
            {/* <button onClick={()=>setCount(count-1)}>Increament</button> */}

            {/* <h2>{num}</h2>
            <button onClick={incre}>Increament</button> */}
        </div>
    )
}



