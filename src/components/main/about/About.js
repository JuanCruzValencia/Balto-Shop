import { Card, Container } from "react-bootstrap";
import "./About.css";

export const About = () => {
  return (
    <Container className="about__container">
      <h2 className="about__title">Un poco sobre mi</h2>
      <Card className="about__card">
        <Card.Img
          src="https://firebasestorage.googleapis.com/v0/b/balto-s-shop.appspot.com/o/juan-cruz-valencia.jpg?alt=media&token=0f1920ef-9790-4c4f-8bdb-023683b19aed"
          alt="Juan Cruz Valencia"
        />
        <Card.Body className="about__body">
          <Card.Title className="about__card--title">
            Juan Cruz Valencia
          </Card.Title>
          <Card.Text>
            Soy estudiante de Desarrollo Web Full Stack, me encanta crear y
            diseñar features y experiencias digitales orientadas al usuario. Me
            gusta trabajar con diferentes tecnologías como JavaScript, ReactJS y
            CSS/SASS entre otras. Todos los días trabajo en mejorar los
            proyectos creados y en nuevos para continuar aprendiendo. Adquirí
            mis conocimientos estudiando de manera autodidacta y certificando a
            la par los mismos en CoderHouse. Mi meta es poder trabajar dia a dia
            creando soluciones y proporcionando una experiencia satisfactoria
            sin problemas ni errores.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
