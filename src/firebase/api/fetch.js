//function para traer los productos de FakeStore API
export const getProductsFromApi = async () => {
  const resolve = await fetch("https://fakestoreapi.com/products");
  const data = await resolve.json();
  return data;
};
