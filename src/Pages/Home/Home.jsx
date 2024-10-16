import { useLoaderData } from "react-router-dom"
import Header from "../Shared/Header/Header"
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"
import NewsCard from "./NewsCard"
import { useState } from "react"
import coverImg from '../../assets/bg1.png';

const Home = () => {
  const news = useLoaderData();
  const [showNews, setShowNews] = useState(3)
  return (
    <div className="">
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-8">
        {/* left side container */}
        <div className="">
          <LeftSideNav />
        </div>

        {/*HomeCenter news container */}
        <div className="md:col-span-2 space-y-4 ">
          {news && news.slice(0, showNews).map(aNews => <NewsCard
            key={aNews._id}
            aNews={aNews}
          />)}
          {
            showNews < news.length && <div className="text-center"><button onClick={() => { setShowNews(prevNews => prevNews + 3) }} className="btn btn-info">Show more</button></div>
          }
        </div>

        {/* right side  */}
        <div className="">
          <RightSideNav />
          
            {/* Amazing news papper */}
            <div>
                <div className="hero px-4">
                    <img className="w-full" src={coverImg} alt="" />
                    <div className="hero-overlay bg-opacity-30">
                    </div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className="mb-5 text-2xl font-bold">Create an Amazing Newspaper</h1>
                            <p className="mb-5">
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home