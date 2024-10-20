import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false)

    const handelRegister = e => {
        e.preventDefault();
        // deffarent way data collect to form value;
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);
        // create user to authProvider theke 
        createUser(email, password)
            .then(result => {
                const currentUser = result.user
                console.log(currentUser);
                e.target.reset()
            })
            .catch(err => {
                console.error(err.message);
                // setError(err.message)
            })
    }
    return (
        <div>
            <Navbar />
            <div className="hero md:p-4">
                <div className="md:w-[60%] w-[90%]">
                    <div className="shrink-0 shadow-2xl">
                        <h3 className="text-center text-3xl pt-2">Registration</h3>
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="name" placeholder="Your full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <button className="btn btn-info">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-4">Already have an account? Please  <Link className="underline text-sky-400 hover:text-blue-800" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register