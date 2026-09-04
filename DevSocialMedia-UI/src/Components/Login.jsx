import { useState } from "react";
import axios from "axios";
import { BASE_API_URL, LOGIN_END_POINT } from "../Utils/BASE_VALUES";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUSer } from "../Store/userSlice";

const Login = () => {
    const [email, setEmail] = useState("spider@gmail.com");
    const [password, setPassword] = useState("1234");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLoginBtn = async () => {
        try {
            const logInApiCall = await axios.post(BASE_API_URL + LOGIN_END_POINT, {
                email: email,
                password: password
            }, { withCredentials: true });
            // {withCredentials: true} is used to send cookies along with the request, 
            // which is necessary for session management and authentication in many web applications. 
            // It allows the server to recognize the client and maintain the session state across different requests.

            console.log(logInApiCall.data);
            const user = logInApiCall.data;
            dispatch(addUSer(user))
            return navigate("/");
        } catch (error) {
            console.log("Login API error: ", error);
        }

    }

    return (
        <div className="flex justify-center">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-neutral mt-4" onClick={handleLoginBtn}>
                    Login
                </button>
            </fieldset>
        </div>

    )
}

export default Login;