import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel__item--container">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fs-1 m-5">Compra comodo a un Click</h3>
          <Link to="/register">
            <Button variant="dark mb-5" className="signin__btn">
              Registrate
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel__item--container">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="fs-1 m-5">Desde donde quieras</h3>
          <Link to="/register">
            <Button variant="dark mb-5" className="signin__btn">
              Registrate
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Hero;
