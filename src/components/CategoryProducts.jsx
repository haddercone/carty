import getProducts from "../utils/getProducts";
import Products from "./Products";
import { CATEGORY_PRODUCTS_URL } from "../config";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { id } = useParams();
  const { isLoaded, products, setProducts } = getProducts(
    CATEGORY_PRODUCTS_URL + id
  );

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

export default CategoryProducts;
