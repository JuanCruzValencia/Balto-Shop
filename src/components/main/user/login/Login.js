import { Form, Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { UserContext } from "../../../../context/UserContext";
import { UserDetail } from "../UserDetail";
import "./Login.css";

function Login() {
  const { userState, signIn } = useContext(UserContext);
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(form);
  };

  return (
    <Container>
      {userState ? (
        <UserDetail />
      ) : (
        <Container className="login__container">
          <h2>Login</h2>
          <Form className="login__form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                className="login__input"
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contrasena</Form.Label>
              <Form.Control
                type="password"
                className="login__input"
                onChange={handleChange}
                pattern="[A-Za-z0-9_-]*"
                name="password"
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="login__btn">
                Ingresar
              </Button>
            </Form.Group>
          </Form>
          <Link to={"/register"}>
            <h4>No tenes cuenta?</h4>
          </Link>
        </Container>
      )}
    </Container>
  );
}

export default Login;
