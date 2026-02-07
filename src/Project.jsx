import React, { useState } from 'react'

export const Project = () => {

  // const[count,setCount] = useState(0)
  // const increament = ()=>{
  //   setCount(count+1)
  // }
  // function Decreament(){
  //   setCount(count-1)
  // }

  //   function reset(){
  //   setCount(0)
  // }

  const[text,setText] = useState("")

    
  return (
    <div>
      {/* <h2>{count}</h2> */}
      {/* <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={()=>setCount(0)}>Reset</button> */}
      {/* <button onClick={increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
       */}

       <input type="text" placeholder='Type Something' value={text} onChange={(e) =>setText(e.target.value)}/>
       <h2>Typed Content : {text}</h2>

    </div>
  )
}
