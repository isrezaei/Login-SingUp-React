import {DispatchValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {Server} from "../ServesApi/ServesApi";
import {useEffect} from "react";

export default function LoginPage ()
{
    const Dispatch = DispatchValue()
    const State  = StateValue()


    function EnterToPanel ()
    {

        Dispatch({
            Type : CaseLoadin.LoginWait
        })


        Server('hello' , 123).then(Response => Dispatch(
            {
                User : Response.username,
                Type : CaseLoadin.LoginSuccess
            }
        ))
    }

    console.log(State)


    return (
        <>
            <h1>Login Page</h1>
            <button onClick={EnterToPanel}>Login</button>
        </>
    )
}