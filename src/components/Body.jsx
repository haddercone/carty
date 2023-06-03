
import getProducts from "../utils/getProducts"
import Categories from "./Categories"
import { useEffect, useState } from "react";

const Products = () => {
    const {products, setProducts} = getProducts();
    // console.log(products);

    const sortLowToHigh =() => {
        setProducts([...products].sort((a,  b) => a.price - b.price))
    }

    const sortHighToLow =() => {
        setProducts([...products].sort((a,  b) => b.price - a.price))
    }

    const sortByDiscount = () => {
        setProducts([...products].sort((a,  b) => b.discountPercentage - a.discountPercentage))
    }
    return(
        <>
            <div className="flex p-3 gap-2   bg-white flex-wrap items-center justify-center ">
                <p className="font-bold ">Sort By : </p>
                <button type="button" onClick={sortLowToHigh} className="border-2 px-5 py-2 rounded-xl">Price: Low - High</button>
                <button type="button" onClick={sortHighToLow} className="border-2 px-5 py-2 rounded-xl">Price: High - Low</button>
                <button type="button" onClick={sortByDiscount} className="border-2 px-5 py-2 rounded-xl">Discount</button>
            </div>
            <div className="flex gap-10 bg-white flex-wrap items-center justify-center p-3">
            {products && products.map(product =>{
                const actualPrice = Math.ceil((product?.price * 100)/(100 - product?.discountPercentage))
                return (
                    <div key={product?.id} className="w-80 border-2 p-3 hover:border-2 ">
                        <div className="overflow-hidden">
                            <img src={product?.thumbnail} className="object-cover  w-80 h-80" />
                        </div>
                        <p className="my-3 text-xl">{product.title}</p>
                        <p className="pb-3 ">
                            <span className=" px-3 py-2 rounded-2xl text-sm bg-orange-200 text-orange-800">{product?.category}</span>
                        </p>
                        <div className="flex  gap-4">
                        <p className="font-bold text-xl">${product?.price}</p>
                        <p className="text-gray-500  line-through">${actualPrice}</p>
                        <p className=" font-bold text-md text-green-700">{product.discountPercentage}% off</p>
                        
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
const Body =() => {
    return (
        <div className="flex py-5 gap-5 bg-gray-100">
            <aside className="w-1/6 " >
                <Categories /> 
            </aside>
            <main className="w-5/6">
                <Products />
            </main>
            
        </div>
    )
}

export default Body;