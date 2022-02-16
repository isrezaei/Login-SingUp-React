import {StateValue} from "../../../../Context/Context";

export default function EmailAndPasswordInputs({HandelSignUpData}){




    return (
        <>
            <input  type='text' name='Email' placeholder='Mobile number or email' onChange={HandelSignUpData}/>

            <input  type='text' name='Password' placeholder='New Password' onChange={HandelSignUpData}/>


        </>
    )
}