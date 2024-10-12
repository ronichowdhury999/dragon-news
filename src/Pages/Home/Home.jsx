import Header from "../Shared/Header/Header"
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"

const Home = () => {
  return (
    <div className="">
      <Header />
      <BreakingNews/>
      <Navbar />
      <h1>this is home</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h2>Dragon News Home</h2>
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  )
}

export default Home