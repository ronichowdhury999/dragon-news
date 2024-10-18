import { Link, NavLink } from "react-router-dom"
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react"
import { AuthContext } from "../../../AuthProvider/AuthProvider"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelSignOut = () => {
    if (user) {
      logOut()
        .then()
        .catch();
    }
  }
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
  </>
  return (
    <div className="">
      <div className="navbar rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="user"
                src={userDefaultPic} />
            </div>
          </div> */}
            <div>
              {user && <span>{user.email}</span>}
            </div>
          {user ?
            <button onClick={handelSignOut} className="btn btn-info ml-4">Sign Out</button>
            :
            <Link to="/login"><button className="btn btn-info ml-4">Login</button></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar