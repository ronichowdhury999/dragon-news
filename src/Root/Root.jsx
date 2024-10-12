import { Outlet } from "react-router-dom"
const Root = () => {
  return (
    <div className="max-w-6xl px-2 mx-auto font-poppins">
        <Outlet/>
    </div>
  )
}

export default Root