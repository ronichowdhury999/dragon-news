import { Link, useLoaderData, useParams } from "react-router-dom"
import Header from "../Shared/Header/Header"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import { useEffect, useState } from "react"

const NewsDetails = () => {
    const [newsDetailsShow, setNewsDetailsShow] = useState()

    const { id } = useParams()
    const news = useLoaderData();

    useEffect(() => {
        const findNews = news?.find(n => n._id == id)
        setNewsDetailsShow(findNews)
    }, [id, news])
    console.log(newsDetailsShow);
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4 gap-2">
                <div className="col-span-3">
                    <h1 className="text-xl font-bold">Dragon News</h1>
                    <div className="card bg-base-100 w-full shadow-xl mt-8">
                        <figure>
                            <img className="w-full"
                                src={newsDetailsShow?.image_url}
                                alt="image_url" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{newsDetailsShow?.title}</h2>
                            <p>{newsDetailsShow?.details}</p>
                            <div className="card-actions justify-start mt-2">
                                <Link to="/">
                                <button className="btn btn-info"> ←  All news in this category</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default NewsDetails