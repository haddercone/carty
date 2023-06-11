import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import { CATEGORY_PRODUCTS_URL } from "../config";
import { useParams } from "react-router-dom";

const Category = () => {
  const { data, updateData } = useContext(DataContext);
  const { category } = useParams();
  const url = CATEGORY_PRODUCTS_URL + category;

  useEffect(() => {
    updateData(url);
  }, [url]);

  console.log(data);

  return (
    <div>
      <p>{data && data?.products[0]?.title}</p>
      <img src={data?.products[0]?.thumbnail} alt={data?.products[0]?.title} />
    </div>
  );
};
export default Category;
