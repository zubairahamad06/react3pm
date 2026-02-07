import React from 'react'

 const Child = ({props}) => {

    console.log("Component Rendered Without Callback");
    console.log("Component Rendered Without Callback");
    console.log("Component Rendered Without Callback");
    console.log("Component Rendered Without Callback");
    
  return (
    <div>
        <button onClick={props}>Click</button>
    </div>
  )
}
export default React.memo(Child)
