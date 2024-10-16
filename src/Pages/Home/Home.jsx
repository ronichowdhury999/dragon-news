import { useLoaderData } from "react-router-dom"
import Header from "../Shared/Header/Header"
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"
import NewsCard from "./NewsCard"

const Home = () => {
  const news = useLoaderData();
  return (
    <div className="">
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-8">
        <div className="">
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2 space-y-4 bg-gray-100">
          {news && news.map(aNews => <NewsCard
            key={aNews._id}
            aNews={aNews}
          />)}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  )
}

export default Home