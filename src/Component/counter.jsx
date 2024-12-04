import { useState } from "react";
import './Counter.css'
export default function Counter() {
    const [mi, setMi] = useState(0);
    let style = 
    function minus() {
        setMi((prevMi) => prevMi - 1);
        console.log(mi);
        
    }

    function plus() {
        setMi((prevMi) => prevMi + 1); 
    }

    return (
        <>
            <h1 >{mi}</h1> 
            <button className="mi" onClick={minus} >-</button>
            <button className="pl" onClick={plus} >+</button>
        </>
    );
}
