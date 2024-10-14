import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
const Root = () => {
  return (
    <div className="bg-sky-100">
      <div className="max-w-7xl px-2 mx-auto font-poppins">
        <Outlet/>
        <Footer/>
    </div>
    </div>
  )
}

export default Root