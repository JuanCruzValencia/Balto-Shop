import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProductById } from "../../../firebase/firebase";
import ItemDetail from "../item/ItemDetail";
import SpinnerComp from "../utils/spinner/Spinner";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((snapshot) => {
      if (!snapshot.exists()) {
        setSelectedProduct(undefined);
        return;
      }
      setSelectedProduct({ id: snapshot.id, ...snapshot.data() });
      setIsLoading(false);
    });
  }, [id]);

  if (selectedProduct === undefined) {
    return (
      <Container className="itemDetail__container">
        <h3>Producto No encontrado</h3>
      </Container>
    );
  }

  return (
    <Container className="itemDetail__container">
      {isLoading ? <SpinnerComp /> : <ItemDetail product={selectedProduct} />}
    </Container>
  );
}

export default ItemDetailContainer;
