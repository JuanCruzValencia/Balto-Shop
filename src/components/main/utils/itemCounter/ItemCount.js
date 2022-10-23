import { Container, Button, Stack } from "react-bootstrap";
import { useCounter } from "../../../../hooks/useCounter";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const { counter, handleAddClick, handleSubClick } = useCounter();
  return (
    <Container className="count__container">
      <Stack direction="horizontal" className="counter__container">
        <Button onClick={handleSubClick} className="itemCount__button">
          -
        </Button>
        <span className="itemDetail__count">{counter}</span>
        <Button onClick={handleAddClick} className="itemCount__button">
          +
        </Button>
      </Stack>
      <Button className="itemDetail__button" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </Container>
  );
}

export default ItemCount;
