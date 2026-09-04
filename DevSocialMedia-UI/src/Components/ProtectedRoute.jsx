import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import { LOGIN_END_POINT } from "../Utils/BASE_VALUES";

const ProtectedRoute = ()=>{
    try {
        const user = useSelector(store=>store.user);
        if(!user){
            // return navigate(LOGIN_END_POINT)  //-> ye error dega bcoz useNavigate event k sath use krte he direct component k sath Navigate use krte he.
            // uncommnet and see the error for better understanding. 
            return <Navigate to={LOGIN_END_POINT} replace />  //-> Login page pe navigate krega. 
        }
        return <Outlet/>
    } catch (error) {
        console.log("Something went wrong in Protected Route:", error);
    }
}

export const PublicRoute = ()=>{
    const user = useSelector(store=>store.user)
    if(user){
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default ProtectedRoute;