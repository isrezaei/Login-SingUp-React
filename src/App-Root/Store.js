import {configureStore} from "@reduxjs/toolkit";
import SignUpSlice from "../##SignUp/SignUpSlice";

export const Store = configureStore({
    reducer : {SignUpSlice}
})