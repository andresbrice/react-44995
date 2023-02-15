import Item from "../Item/Item";
const ItemList = ({ prods }) => {
  console.log(prods);
  return (
    <>
      {prods.map((product) => (
        <Item item={product} key={product.id} />
      ))}
    </>
  );
};

export default ItemList;
