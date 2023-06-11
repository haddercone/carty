// import Products from "./Products";
import useFetch from "../hooks/useFetch";
import { CATEGORY_LIST_URL } from "../config";
import { Link } from "react-router-dom";

const Body = () => {
  const { data, loading, error } = useFetch(CATEGORY_LIST_URL);

  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <section className="">
          {data &&
            data.map((category, index) => {
              return (
                <Link
                  to={"/category/" + category}
                  key={index}
                  className="text-gray-600 block"
                >
                  {category}{" "}
                </Link>
              );
            })}
        </section>
      )}
    </>
  );
};
export default Body;
