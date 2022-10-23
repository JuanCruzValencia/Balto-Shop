import { useContext, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import { setOrder } from "../../../firebase/firebase";
import "./Checkout.css";

export const Checkout = () => {
  const { cartList, totals, removeList } = useContext(CartContext);
  const { userState } = useContext(UserContext);
  const [orderId, setOrderId] = useState("");
  const { form, handleChange } = useForm({
    name: "",
    phone: "",
    email: "",
    emailValidate: "",
  });

  const handleClick = async () => {
    const orderId = await setOrder(userState, cartList, totals);
    setOrderId(orderId);
    removeList();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderId = await setOrder(form, cartList, totals);
    setOrderId(orderId);
    removeList();
  };

  return (
    <Container className="checkout__container">
      {cartList.length > 0 ? (
        <Container className="checkout__cart">
          <h2>Mi Carrito</h2>
          {cartList.map((product) => {
            return (
              <Card key={product.id} className="checkout__card">
                <Card.Title as="p">{product.title}</Card.Title>
                <Card.Text className="checkout__card--text">
                  ${product.price.toFixed(2)}
                </Card.Text>
                <Card.Text>x{product.quantity}</Card.Text>
              </Card>
            );
          })}
          <h4>Total de la Compra: ${totals().toFixed(2)}</h4>
        </Container>
      ) : (
        <Container className="text-center">
          <h2>Orden generada con exito!!</h2>
        </Container>
      )}
      <Container className="checkout__order">
        <h2>Mis Datos</h2>
        {userState ? (
          <Container>
            <Card className="order__card">
              <Card.Title>Nombre: {userState.name}</Card.Title>
              <Card.Text>Email: {userState.email}</Card.Text>
              <Card.Text>Telefono: {userState.phone}</Card.Text>
              {orderId ? (
                <Alert variant="success">Orden: {orderId}</Alert>
              ) : (
                <Button onClick={() => handleClick()} className="order__btn">
                  Generar Orden
                </Button>
              )}
            </Card>
          </Container>
        ) : (
          <Form
            onSubmit={(e) => handleSubmit(e, form)}
            className="checkout__form"
          >
            <Form.Group>
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                className="checkout__input"
                name="name"
                onChange={handleChange}
              />
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                className="checkout__input"
                name="phone"
                onChange={handleChange}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="checkout__input"
                name="email"
                onChange={handleChange}
              />
              <Form.Label>Reingrese Email</Form.Label>
              <Form.Control
                type="email"
                className="checkout__input"
                name="emailValidate"
                onChange={handleChange}
              />
            </Form.Group>
            {orderId ? (
              <Alert variant="success">{orderId}</Alert>
            ) : (
              <Button
                type="submit"
                className="checkout__btn"
                disabled={
                  form.name && form.email && form.emailValidate && form.phone
                    ? false
                    : true
                }
              >
                Generar Orden
              </Button>
            )}
          </Form>
        )}
      </Container>
    </Container>
  );
};
