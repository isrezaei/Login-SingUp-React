import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import SignUpServer from "../../ServesApi/SignUpServer";


export const SendSignUpData = createAsyncThunk('SendSignUpData' , (prams)=> {

    console.log(prams)

   return SignUpServer(prams).then(Response => Response)
})

const SignUpAdapter = createEntityAdapter()

const initialState = SignUpAdapter.getInitialState({
    status : 'idle'
})

export const {selectById , selectAll , SelectIds} = SignUpAdapter.getSelectors()


const SignUpSlice = createSlice({
    name : 'SignUp' ,
    initialState,
    reducers : {} ,
    extraReducers : {
        [SendSignUpData.pending] : (state , action) =>
        {

        } ,
        [SendSignUpData.fulfilled] : (state , action) =>
        {
            console.log(action)
        }
    }
})

export default SignUpSlice.reducer
export const {GetSignUpData} = SignUpSlice.actions