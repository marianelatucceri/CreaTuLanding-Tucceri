import { useState } from "react";

function ItemCount () {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount (count + 1)
    }

    const handleSubstract = () => {
        setCount (count - 1)
    }

    return (
        <div>
            <p style={{ fontSize: '20px' }}>{count}</p>
            <button style={{ backgroundColor: 'rgba(206, 164, 164, 0.678)', border: 'solid 1px white', borderRadius: '7px', color: 'white' }} onClick={handleAdd}>Agregar</button>
            <button style={{ backgroundColor: 'rgba(206, 164, 164, 0.678)', border: 'solid 1px white', borderRadius: '7px', color: 'white' }} onClick={handleSubstract}>Quitar</button>
        </div>

    )
}

export default ItemCount