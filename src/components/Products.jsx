const Products = ({ products, setProducts }) => {
  // console.log(products);

  const sortLowToHigh = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };

  const sortHighToLow = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };

  const sortByDiscount = () => {
    setProducts(
      [...products].sort((a, b) => b.discountPercentage - a.discountPercentage)
    );
  };
  return (
    <>
      <div className="flex p-3 gap-2 bg-white flex-wrap items-center justify-center ">
        <p className="font-bold ">Sort By : </p>
        <button
          type="button"
          onClick={sortLowToHigh}
          className="border-2 px-5 py-2 rounded-xl"
        >
          Price: Low - High
        </button>
        <button
          type="button"
          onClick={sortHighToLow}
          className="border-2 px-5 py-2 rounded-xl"
        >
          Price: High - Low
        </button>
        <button
          type="button"
          onClick={sortByDiscount}
          className="border-2 px-5 py-2 rounded-xl"
        >
          Discount
        </button>
      </div>
      <div className="flex  gap-2 md:gap-10 bg-white flex-wrap items-center justify-center md:p-3">
        {products &&
          products.map((product) => {
            const actualPrice = Math.ceil(
              (product?.price * 100) / (100 - product?.discountPercentage)
            );
            return (
              <div
                key={product?.id}
                className="w-44 h-auto  md:w-72 xl:w-80 border-2 p-3 hover:border-2 "
              >
                <div className="overflow-hidden">
                  <img
                    src={product?.thumbnail}
                    className="object-cover w-36 h-36 md:w-72 xl:w-80 md:h-80 "
                  />
                </div>
                <p className="my-3 text-xl">{product.title}</p>
                <p className="pb-3 hidden md:block">
                  <span className="px-3 py-2 rounded-2xl text-sm bg-orange-200 text-orange-800">
                    {product?.category}
                  </span>
                </p>
                <div className="flex gap-2 md:gap-4 md:flex-row flex-col">
                  <p className="font-bold text-xl">${product?.price}</p>
                  <p className="text-gray-500  line-through">${actualPrice}</p>
                  <p className=" font-bold text-md text-green-700">
                    {product.discountPercentage}% off
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
