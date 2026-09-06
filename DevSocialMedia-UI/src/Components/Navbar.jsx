import axios from "axios"
import { Link, Navigate } from "react-router-dom"
import { BASE_API_URL, LOGIN_END_POINT, LOGOUT_END_POINT } from "../Utils/BASE_VALUES"
import { useDispatch } from "react-redux"
import { removeUser } from "../Store/userSlice"

const Navbar = () => {

    const dispatch = useDispatch();
    const handleLogOut = async ()=>{
        try {
            await axios.post(BASE_API_URL+LOGOUT_END_POINT, {}, {withCredentials:true});
            dispatch(removeUser());
            <Navigate to={LOGIN_END_POINT} />
        } catch (error) {
            console.log("Logout webt wrong...")
        }
        
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between" >
                                Profile
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                            <a onClick={handleLogOut} >Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar