import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const urlBase = "https://dummyjson.com/products";
    const urlByCategory = `https://dummyjson.com/products/category/${id}`;

    fetch(id ? urlByCategory : urlBase)
      .then((res) => res.json())
      .then((res) => setItems(res.products))
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
