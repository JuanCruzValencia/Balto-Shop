import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { WishListContext } from "../../../context/WishListContext";
import "./Item.css";

function Item({ product }) {
  const { wishList, addToWishList, deleteItem } = useContext(WishListContext);
  const [fav, setFav] = useState(false);

  return (
    <Card className="item__card">
      {wishList.some((item) => item.id === product.id) ? (
        <AiTwotoneHeart
          className="heart__filled"
          onClick={() => {
            deleteItem(product.id);
            setFav(!fav);
          }}
        />
      ) : (
        <AiOutlineHeart
          className="heart__icon-item"
          onClick={() => {
            addToWishList(product);
            setFav(!fav);
          }}
        />
      )}
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="itemCard__body">
        <Card.Text className="itemCard__price">
          ${product.price.toFixed(2)}
        </Card.Text>
        <Card.Title>{product.title}</Card.Title>
        <Link to={`/item/${product.id}`}>
          <Button className="itemCard__btn">Ver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
