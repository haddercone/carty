import { useState, useEffect } from "react";
import getProducts from "../utils/getProducts";
const Header = () => {
    const { productTitles } = getProducts();
    const [suggestions, setSuggestions] = useState([])
    const [suggestionVisible, setSuggestionVisible] = useState(false)
    // console.log(productTitles);

    const [query, setQuery] = useState("")

    const filterProductTitles = (productTitles, query) => {
        const queryText = query.trim()
        if (!queryText) return null;
        const filteredData = productTitles.filter(title => title.toLowerCase().includes(query.toLowerCase()));
        // console.log(filteredData);
        return filteredData;
    }

    useEffect(() => {
        const timeID = setTimeout(() => {
            const data = filterProductTitles(productTitles, query);
            setSuggestions(data)
            // console.log(data);
        }, 300)
        return (() => clearTimeout(timeID))
    }, [query])

    return (

        <header className=" relative flex gap-4 p-2 my-2 justify-between">
            <div className="font-bold text-2xl ">C A R T Y</div>
            <input autoFocus={true} onBlur={() => setSuggestionVisible(false)} onFocus={() => setSuggestionVisible(true)} className="border-2 border-black px-2 w-2/4" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="font-bold">
                cart -
            </div>
            {suggestionVisible && <div className=" w-1/2 ml-8 absolute top-12 bg-white left-1/2 transform -translate-x-1/2 ">
                {suggestions && suggestions.slice(0, 7).map(suggestion => {
                    return (
                        <div key={suggestion} className="p-2 ">{suggestion}</div>
                    )
                })}
            </div>}
        </header>
    )
}
export default Header;