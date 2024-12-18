import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ItemDetailContainer () {
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/&{id}`)
          .then(res => res.json())
          .then(res => setItem(res));
    }, [id])

    return (
        <div>
        <img src={item?.thumbnail} alt={item?.title} />
        <h2>{item?.title}</h2>
        <p>{item?.description}</p>
        </div>
    )
}

export default ItemDetailContainer