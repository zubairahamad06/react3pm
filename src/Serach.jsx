import React, { useState } from 'react'

export const Serach = () => {

    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"]
    const [text, setText] = useState("")



    const filteredfruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(text.toLowerCase())
    )
    return (
        <div>
            <input type="text" placeholder='Search Fruits' value={text} onChange={(e) => setText(e.target.value)} />

            {filteredfruits.length > 0 ? (
                <ul>
                    {filteredfruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            ) : (

                <p>No results pound</p>

            )}

        </div>
    )
}
