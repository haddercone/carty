import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Categories from "./components/Categories";
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <div className="flex md:flex-row flex-col py-5 gap-5 bg-gray-100">
            <aside className="md:w-1/6 " >
                <Categories /> 
            </aside>
            <main className="md:w-5/6">
              <Outlet/>
            </main>
        </div>

      
    </>
  )
}

export default App
