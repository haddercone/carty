import getProducts from "../utils/getProducts"
const Products =() => {
    const {products} = getProducts();
    // console.log(products.products);
    const Products = products?.products;
    return (
        <div className="flex gap-10 flex-wrap items-center justify-center">
        {Products && Products.map(product =>{
            return (
                <div key={product?.id} className="w-80 ">
                    <div className="overflow-hidden">
                        <img src={product?.thumbnail} className="object-cover hover:scale-110  transition w-80 h-80" />
                    </div>
                    <p>{product.title}</p>
                    <p>${product?.price}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Products;