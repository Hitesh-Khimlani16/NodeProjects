import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_URL, LOGIN_END_POINT, PROFILE_END_POINT } from "../Utils/BASE_VALUES";
import { addUSer } from "../Store/userSlice";

const MainBody = () => {
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