import Header from "../Shared/Header/Header"
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"
import HomeNews from "./HomeNews"

const Home = () => {
  return (
    <div className="">
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-8">
        <div className="">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 py-8 bg-gray-100">
          <HomeNews/>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  )
}

export default Home