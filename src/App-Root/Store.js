import {configureStore} from "@reduxjs/toolkit";
import SignUpSlice from "../Redux/Slice/SignUpSlice";

export const Store = configureStore({
    reducer : {SignUpSlice}
})