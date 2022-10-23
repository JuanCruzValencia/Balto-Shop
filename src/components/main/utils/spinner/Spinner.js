import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function SpinnerComp() {
  return (
    <Container>
      <div>
        <Spinner animation="border" role="status"></Spinner>
      </div>
      <div>
        <span>Loading...</span>
      </div>
    </Container>
  );
}

export default SpinnerComp;
