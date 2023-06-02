import { useState, useEffect } from "react";
import { CATAGORY_LIST_URL } from "../config";

function getProductCatagories(){
  const [productCategories, setProductCategories] = useState([])
  const [_, setIsLoaded] = useState(false);

  async function getCatagories(){
    const data = await fetch(CATAGORY_LIST_URL);
    const json = await data.json();
    setProductCategories(json)
    setIsLoaded(true); 
  }

  useEffect(() => {
    getCatagories()
  }, [])

  return productCategories;
}
export default getProductCatagories;