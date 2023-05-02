import { Outlet, useLoaderData } from "react-router-dom"
import TopNav from "./Components/TopNav"
import Footer from "./Components/Fotter"
import { createContext } from "react"
import toast, { Toaster } from 'react-hot-toast';

export const DataContext = createContext()

function App() {
  const data = useLoaderData()
  return (
    <div className="MyContainer mt-4 ">
      <TopNav />
      <div className="min-h-[calc(100vh-155px)]">
        <DataContext.Provider value={data}>
          <Outlet />
        </DataContext.Provider>
      </div>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
