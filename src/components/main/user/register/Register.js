import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../../../hooks/useForm";
import { UserContext } from "../../../../context/UserContext";
import { UserDetail } from "../UserDetail";
import "./Register.css";

function Register() {
  const { userState, registerUser } = useContext(UserContext);
  const { form, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    adress: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, passwordConfirm } = form;
    if (password === passwordConfirm) {
      registerUser(form);
    } else {
      alert("Las contrasenas no coinciden");
    }
  };

  return (
    <Container>
      {userState ? (
        <UserDetail />
      ) : (
        <Container className="register__container">
          <h2>Registrarse</h2>
          <Form className="register__form" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  className="register__input"
                  name="name"
                  pattern="[a-zA-Z][a-zA-Z ]{2,}"
                  onChange={handleChange}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="register__input"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Contrasena</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="register__input"
                  name="password"
                  pattern="[A-Za-z0-9_-]*"
                  onChange={handleChange}
                />
                <Form.Label>Repita Contrasena</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="register__input"
                  name="passwordConfirm"
                  pattern="[A-Za-z0-9_-]*"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  className="register__input"
                  name="adress"
                  pattern="[A-Za-z_-]?[A-Za-z0-9_-]?{2,}"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  className="register__input"
                  name="phone"
                  pattern="[0-9]*"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Button type="submit" className="register__btn">
              Registrarse
            </Button>
          </Form>
          <Link to={"/login"}>
            <h4>Ya tenes una cuenta?</h4>
          </Link>
        </Container>
      )}
    </Container>
  );
}

export default Register;
