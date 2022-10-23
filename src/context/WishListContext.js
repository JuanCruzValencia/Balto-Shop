import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

export const WishListContext = createContext({});

export function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useLocalStorage("wishList", []);

  const addToWishList = (product) => {
    if (!isInWishList(product.id)) {
      wishList.push(product);
      setWishList([...wishList]);
    } else {
      alert("El producto ya se encuentra en la lista de Deseos");
    }
  };

  const deleteItem = (id) => {
    setWishList(wishList.filter((product) => product.id !== id));
  };

  const isInWishList = (id) => {
    return wishList.some((product) => product.id === id);
  };

  const data = {
    wishList,
    addToWishList,
    deleteItem,
  };

  return (
    <WishListContext.Provider value={data}>
      {children}
    </WishListContext.Provider>
  );
}
