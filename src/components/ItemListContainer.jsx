/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import { CartContext } from "../context/CartContext"
import ItemList from "./ItemList"


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const cart =useContext(CartContext)

  useEffect(() => {
    const urlBase = "https://dummyjson.com/products";
    const urlByCategory = `https://dummyjson.com/products/category/${id}`;

    fetch(id ? urlByCategory : urlBase)
      .then((res) => res.json())
      .then((res) => setItems(res.products))
      .catch((err) => console.log(err));

    console.log(cart)
  }, [id]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
