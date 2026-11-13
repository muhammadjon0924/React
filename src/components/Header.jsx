import { useState } from 'react'
import "./Header.css"

export default function Header() {

    const [count, setCount] = useState(0)
    const handleMinus =() =>{
        if (count > 0)
            setCount(count-1)
    }

    
    



    return (
        <div className='wrapper'>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}
