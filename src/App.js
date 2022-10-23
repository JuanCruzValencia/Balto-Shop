// react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
// context imports
import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import { UserContextProvider } from "./context/UserContext";
// components
import NavBar from "./components/header/navbar/NavBar";
import Hero from "./components/main/hero/Hero";
import ItemListContainer from "./components/main/itemList/ItemListContainer";
import ItemDetailContainer from "./components/main/itemList/ItemDetailContainer";
import Cart from "./components/main/cart/Cart";
import Register from "./components/main/user/register/Register";
import Login from "./components/main/user/login/Login";
import { Checkout } from "./components/main/checkout/Checkout";
import Footer from "./components/footer/Footer";
// firebase/firestore
import { getProductsFromApi } from "./firebase/api/fetch";
import { firebaseConfig } from "./firebase/fireStore";
import { initializeApp } from "firebase/app";
// styles
import "./App.css";

initializeApp(firebaseConfig);

function App() {
  const fetchStatus = useRef(false);

  useEffect(() => {
    if (fetchStatus.current === false) {
      getProductsFromApi();
    }
    return () => {
      fetchStatus.current = true;
    };
  }, []);

  return (
    <Router>
      <UserContextProvider>
        <CartContextProvider>
          <WishListContextProvider>
            <div className="App">
              <NavBar />
              <Hero />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ItemListContainer greeting="Bienvenido a balto shop" />
                  }
                />
                <Route
                  path="/category/:categoryId"
                  element={
                    <ItemListContainer greeting="Bienvenido a balto shop" />
                  }
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </div>
          </WishListContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
