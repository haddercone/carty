import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../config";

function getProducts(){
    const [products, setProducts] = useState({});
    const [_, setIsLoaded] = useState(false);
    const [productTitles, setProductTitles] = useState([]);
    async function fetchProducts(){
        try{
            const res = await fetch(PRODUCTS_URL);
            if(!res.ok){
                throw new Error("Bad response", {
                    cause : {
                        res,
                    }
                })
            }
            const json = await res.json();
            // console.log(json);
            const titles = json?.products.map(product => product.title)
            // console.log(titles);
            setProductTitles(titles);

            setProducts(json);
            setIsLoaded(true);

        } catch(err){
            switch(err.cause.res?.status){
                case 400 : return;
                case 404 : return;
                case 500 : return;
                case 401 : return;
            }
            handle(err);
            throw err;

        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return {productTitles, products};
}
export default getProducts;