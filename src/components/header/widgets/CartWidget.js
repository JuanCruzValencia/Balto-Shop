import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import "./CartWidget.css";
//El componente no se renderiza nuevamenter si agrego productos desde la lista de favoritos
function CartWidget() {
  const { cartLength } = useContext(CartContext);
  const [cart, setCart] = useState(cartLength());

  useEffect(() => {
    setCart(cartLength());
  }, [cartLength]);

  return (
    <>
      <MdOutlineShoppingBag />
      {cartLength() !== undefined && (
        <span className="cart__count">{cart}</span>
      )}
    </>
  );
}

export default CartWidget;
