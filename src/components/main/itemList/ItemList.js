import Item from "../item/Item";

function ItemList({ data }) {
  return (
    <>
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
}

export default ItemList;
