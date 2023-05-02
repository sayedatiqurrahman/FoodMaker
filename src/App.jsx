import { useLoaderData } from "react-router-dom"
import Header from "./Components/Header"
import TopNav from "./Components/TopNav"
import AllChef from "./Components/allChef"

function App() {
  const data = useLoaderData()
  return (
    <div className="MyContainer mt-4 ">
      <TopNav />
      <Header />

      <div className="my-[130px] text-center ">
        <h2 className="text-2xl  font2">All The Chefs At Your Fingertips</h2>

        <AllChef data={data} />


      </div>
    </div>
  )
}

export default App
