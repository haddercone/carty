import getProductCategories from "../utils/getProductCategories";

const Categories = () => {
    const categories = getProductCategories();

    return (
        <div className="bg-white">
            {categories.map(catagory => {
                return (
                    <p className="mx-2 py-2 px-4 bg-white border-b-2 border-gray-200 " key={catagory}>{catagory}</p>
                )
            })}
        </div>
    )
}
export default Categories;