import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  const addToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
      cartList.push({
        ...item,
        quantity: quantity,
      });
      setCartList([...cartList]);
    } else {
      alert("El producto ya se encuentra en el carrito");
    }
  };

  const isInCart = (id) => {
    return cartList.some((product) => product.id === id);
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  const totals = () => {
    return cartList.reduce((acc, act) => {
      return acc + act.price * act.quantity;
    }, 0);
  };

  const cartLength = () => {
    if (cartList.length > 0) {
      return cartList.reduce((acc, act) => {
        return acc + act.quantity;
      }, 0);
    }
  };

  const validateCart = () => {
    let result = false
    cartList.map((item) => {
      return item.quantity > item.stock ? result = false : result = true;
    });
    return result
  };

  const data = {
    cartList,
    addToCart,
    removeList,
    deleteItem,
    totals,
    cartLength,
    validateCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
