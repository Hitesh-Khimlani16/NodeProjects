import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_URL, LOGIN_END_POINT, PROFILE_END_POINT } from "../Utils/BASE_VALUES";
import { addUSer } from "../Store/userSlice";

const MainBody = () => {
  // const userData = useSelector(store=>store.user);
  // console.log("userData = ", userData);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);

  // const fetchUser = async () => {
  //   if (userData) return;
  //   try {
  //     const res = await axios.get(
  //       BASE_API_URL + PROFILE_END_POINT, 
  //       { withCredentials: true }
  //     );
  //     console.log("response::", res?.data);
  //     if(res?.data){
  //       dispatch(addUSer(res.data));
  //     }
  //   } catch (error) {
  //     console.log("Something went wrong...", error);
  //     navigate(LOGIN_END_POINT);
  //   } finally{
  //     setLoading(false);
  //   }
  // }

  // useEffect(()=>{
  //   // if(!userData){
  //   //   setLoading(false);
  //   //   return;
  //   // }
  //   fetchUser();
  // }, []);

  // if(loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainBody;