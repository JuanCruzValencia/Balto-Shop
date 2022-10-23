import { setAllProducts } from "../firebase";
//function para traer los productos de FakeStore API
//Se resuelve agregando los productos a firestore

export const getProductsFromApi = async () => {
  const resolve = await fetch("https://fakestoreapi.com/products");
  const data = await resolve.json();
  data.forEach(product => setAllProducts(product))
};
