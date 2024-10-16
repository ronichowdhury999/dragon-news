import {FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import swimmingImg from '../../../assets/qZone1.png'
import classImg from '../../../assets/qZone2.png'
import playGroundImg from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div className="">
            {/* login with google,github section */}
            <div className="px-4 space-y-3 ">
                <h2 className="text-xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            {/* social media section */}
            <div className="p-4 mt-5">
                <h2 className="text-xl">Find Us On</h2>
                <a href="" className="p-4 border rounded-t-lg flex items-center gap-3">
                    <FaFacebook className="text-blue-500" />
                    <a target="blank" href="https://www.facebook.com/@i.mdroni">Facebook</a>
                </a>
                <a target="blank" href="" className="p-4 border flex items-center gap-3">
                    <FaTwitter className="text-sky-400" />
                    <span>Twitter</span>
                </a>
                <a target="blank" href="https://www.instagram.com/i.mdronichowdhury/" className="p-4 border rounded-b-lg flex items-center gap-3">
                    <FaInstagram className="text-red-400" />
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q-zone img section */}
            <div className="p-4 space-x-3">
                <h2 className="text-xl">Q-zone</h2>
                <div className="p-2">
                    <img src={swimmingImg} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playGroundImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RightSideNav