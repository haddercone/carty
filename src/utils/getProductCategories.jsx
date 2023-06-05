import { useState, useEffect } from "react";
import { CATEGORY_LIST_URL } from "../config";

function getProductCategories() {
  const [productCategories, setProductCategories] = useState([]);
  const [_, setIsLoaded] = useState(false);

  async function getCategories() {
    const data = await fetch(CATEGORY_LIST_URL);
    const json = await data.json();
    setProductCategories(json);
    setIsLoaded(true);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return productCategories;
}
export default getProductCategories;
