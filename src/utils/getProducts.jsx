import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_URL } from "../config";

function getProducts(url) {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productTitles, setProductTitles] = useState([]);

  async function fetchProducts(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        switch (res?.status) {
          case 400:
            return;
          case 404:
            return;
          case 500:
            return;
          case 401:
            return;
        }
      }
      const json = await res.json();
      // console.log(json);
      const titles = json?.products.map((product) => product.title);
      // console.log(titles);
      setProductTitles(titles);

      setProducts(json?.products);
      // console.log(json?.products);
      setIsLoaded(true);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  return { productTitles, isLoaded, products, setProducts };
}
export default getProducts;
