// We'll check from Backend that user is logged in or not ? 

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_API_URL, PROFILE_END_POINT } from "../Utils/BASE_VALUES";
import axios from "axios";
import { addUSer } from "../Store/userSlice";

const CheckCookie = ({children}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await axios.get(
                BASE_API_URL + PROFILE_END_POINT,
                { withCredentials: true }
            );
            console.log("response::", res?.data);
            if (res?.data) {
                dispatch(addUSer(res.data));
            }
        } catch (error) {
            console.log("Something went wrong from checkCookie...", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }

    return children;
}

export default CheckCookie;