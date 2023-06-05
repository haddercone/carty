import getProductCategories from "../utils/getProductCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = getProductCategories();

  return (
    <div className="bg-white">
      {categories.map((category) => {
        return (
          <Link to={"/category/" + category} key={category}>
            <p className="mx-2 py-2 px-4 bg-white border-b-2 border-gray-200 ">
              {category}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default Categories;
