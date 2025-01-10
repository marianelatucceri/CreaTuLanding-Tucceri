/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="detail-container">
      <img src={item?.thumbnail} alt={item?.title} />
      <h2>{item?.title}</h2>
      <p>{item?.description}</p>
      <br />
      <ItemCount item={item} />
    </div>
  );
}

export default ItemDetail;
