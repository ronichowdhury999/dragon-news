import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar"

const Login = () => {

    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
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
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
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