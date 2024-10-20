import { Link, useLocation, useNavigate, } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)
    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user);
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <Navbar />
            <div className="hero md:p-4">
                <div className="md:w-[60%] w-[90%]">
                    <div className="shrink-0 shadow-2xl">
                        <h3 className="text-center text-3xl pt-8">Login your account</h3>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <button className="absolute top-4 right-3" onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-">
                                <button className="btn btn-info">Login</button>
                            </div>
                        </form>
                        <p className="text-center pb-6">You don't have account? Please  <Link className="underline text-sky-400 hover:text-blue-800" to="/register">Registration</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login