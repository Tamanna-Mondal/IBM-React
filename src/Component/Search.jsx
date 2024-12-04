import { useState } from "react";

export default function Search() {
    const product = ["apple", "orange", "banana"];
    const [filteredProducts, setFilteredProducts] = useState(product); 

    function handleChange(event) {
        const value = event.target.value; 

        setFilteredProducts(result); 
    }

    return (
        <>
            <label>Search:</label>
            <input onChange={handleChange} placeholder="Search here" />
            <ul>
                {filteredProducts.map((item) => (
                    <li >{item}</li>
                ))}
            </ul>
        </>
    );
}
