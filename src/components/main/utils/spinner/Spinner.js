import Spinner from "react-bootstrap/Spinner";

function SpinnerComp() {
  return (
    <>
      <div>
        <Spinner animation="border" role="status"></Spinner>
      </div>
      <div>
        <span>Loading...</span>
      </div>
    </>
  );
}

export default SpinnerComp;
