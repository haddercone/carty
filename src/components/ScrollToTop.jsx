import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const ScrollToTop = () => {
    const location = useLocation();
    // console.log(location);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    },[location]);
}
export default ScrollToTop;