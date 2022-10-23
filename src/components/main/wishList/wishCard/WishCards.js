import { Card, Button, Stack } from "react-bootstrap";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { WishListContext } from "../../../../context/WishListContext";
import { CartContext } from "../../../../context/CartContext";
import "./WishCard.css";

export function WishCards({ data }) {
  const { deleteItem } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="wishList__container">
      <Card.Img src={data.image} className="wishList__image" />
      <Card.Body className="wishList__body">
        <Card.Title className="wishList__title">{data.title}</Card.Title>
        <Stack className="wishList--btn__container">
          <Button onClick={() => deleteItem(data.id)} className="wishList__btn">
            <BsTrash />
          </Button>
          <Button onClick={() => addToCart(data, 1)} className="wishList__btn">
            <MdOutlineShoppingBag />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
