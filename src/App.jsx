import Head from "./components/Head"
import Body from "./components/Body"
import { Outlet } from "react-router-dom"
import { DataProvider } from "./context/DataContext"
function App() {
  return (
    <DataProvider>
      <Head />
      <Outlet/>
    </DataProvider>
    
  )
}

export default App
