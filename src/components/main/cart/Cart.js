import { Button, Card, Container, Stack } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import "./Cart.css";

function Cart() {
  const { cartList, removeList, deleteItem, totals } = useContext(CartContext);

  return (
    <Container className="cart__container">
      <h2>Carrito de compras</h2>
      <Container className="cart__card--container">
        {cartList.length <= 0 ? (
          <Container className="cart__container--empty">
            <h3>EL carrito se encuentra vacio...</h3>
            <Link to={"/"}>
              <Button className="btn--toShop">Ir al shop</Button>
            </Link>
          </Container>
        ) : (
          cartList.map((product) => {
            return (
              <Card key={product.id} className="cart__card">
                <Card.Img src={product.image} />
                <Card.Title className="cart__card--title">
                  {product.title}
                </Card.Title>
                <Card.Text className="cart__card--text">
                  ${product.price.toFixed(2)} X {product.quantity}
                </Card.Text>
                <i onClick={() => deleteItem(product.id)}>
                  <BsTrash />
                </i>
              </Card>
            );
          })
        )}
      </Container>
      <Container className="cart__footer--container">
        <Stack className="cart__footer--stack">
          <p>
            <b>Total:</b>
          </p>
          <p>
            <b>${totals().toFixed(2)}</b>
          </p>
        </Stack>
        <Button
          className="itemCart__btn"
          onClick={() => removeList()}
          disabled={cartList.length > 0 ? false : true}
        >
          Vaciar Carrito
        </Button>
        <Link to={"/checkout"}>
          <Button
            className="itemCart__btn"
            disabled={cartList.length > 0 ? false : true}
          >
            Finalizar Compra
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Cart;
