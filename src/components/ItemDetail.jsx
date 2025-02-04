/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="detail-container">
      <img src={item?.image} alt={item?.name} />
      <h2>{item?.name}</h2>
      <p>{item?.description}</p>
      <br />
      <ItemCount item={item} />
    </div>
  );
}

export default ItemDetail;
