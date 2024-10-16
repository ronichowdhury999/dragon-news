import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import moment from 'moment';
import blogImg1 from "../../../assets/1.png"
import blogImg2 from "../../../assets/2.png"
import blogImg3 from "../../../assets/3.png"

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="px-4 bg-gray-100">
            <div>
                <h2 className="text-2xl">All Categories</h2>
                {categories && categories.map(category => <Link className="block p-4 ml-10 font-semibold hover:underline"
                    key={category.id}
                    to="/"
                >{category.name}</Link>)}
            </div>

            <div className="mt-8">
                <img className="w-full" src={blogImg1} alt="" />
                <p className="mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between mt-4">
                    <span>
                        Sports
                    </span>
                    <p> {moment().format("Do, MMMM YYYY,")}</p>
                </div>
            </div>
            <div className="mt-6">
                <img className="w-full" src={blogImg2} alt="" />
                <p className="mt-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between mt-4">
                    <span>
                        Sports
                    </span>
                    <p> {moment().format("Do, MMMM YYYY,")}</p>
                </div>
            </div>
            <div className="mt-6">
                <img className="w-full" src={blogImg3} alt="" />
                <p className="mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between mt-4">
                    <span>
                        Sports
                    </span>
                    <p> {moment().format("Do, MMMM YYYY,")}</p>
                </div>
            </div>
            <div className="text-center pb-10 pt-10">
                <p>Roni Chowdhury</p>
            </div>
        </div>
    )
}

export default LeftSideNav