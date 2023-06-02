import getProductCatagories from "../utils/getProductCatagories";

const Catagories = () => {
    const catagories = getProductCatagories();

    return (
        <div className="my-2 flex overflow-x-scroll whitespace-nowrap no-scrollbar ">
            {catagories.map(catagory => {
                return (
                    <p className="mx-2 py-2 px-4 bg-gray-200 rounded-xl" key={catagory}>{catagory}</p>
                )
            })}
        </div>
    )
}
export default Catagories;