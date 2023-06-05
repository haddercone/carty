import getProducts from "../utils/getProducts";
import Products from "./Products";
import { PRODUCTS_URL } from "../config";

const Body = () => {
  const { isLoaded, products, setProducts } = getProducts(PRODUCTS_URL);
  return (
    <>
      {!isLoaded ? (
        "Loading..."
      ) : (
        <Products products={products} setProducts={setProducts} />
      )}
    </>
  );
};

export default Body;
