import {useParams } from "react-router-dom"
import Header from "../Shared/Header/Header"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import Navbar from "../Shared/Navbar/Navbar"

const NewsDetails = () => {
    const newsDetails = useParams()
    console.log(newsDetails);
    const { id} = newsDetails;
    return (
        <div>
            <Header />
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-2">
                <div className="col-span-3">
                    <h1>Dragon News</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default NewsDetails