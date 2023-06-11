import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Products = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <p>{data && data?.products[0]?.title}</p>
      <img src={data?.products[0]?.thumbnail} alt={data?.products[0]?.title} />
    </div>
  );
};
export default Products;
