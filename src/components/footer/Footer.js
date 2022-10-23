import { Container } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import './Footer.css'

function Footer() {
  return (
    <Container className='footer__container' fluid>
      <span>
        Dev by Juan Cruz Valencia with <BsHeart />
      </span>
    </Container>
  );
}

export default Footer;
