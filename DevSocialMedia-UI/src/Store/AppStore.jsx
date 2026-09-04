import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const AppStore = configureStore({
    reducer:{
        user: userSlice,
    }
})

export default AppStore;