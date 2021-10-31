import {useLayoutEffect, useState} from "react";
import {DispatchValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {Server} from "../ServesApi/ServesApi";
import {useHistory , useLocation} from "react-router-dom";
import {cleanup} from "@testing-library/react";


export default function LoginPage ()
{
    const [UserName , SetUserName] = useState('')
    const [Password , SetPassword] = useState('')
    const [Error , SetError] = useState()

    const Dispatch = DispatchValue()
    const {login , wait}  = StateValue()



    const {from} = useLocation()
    const history = useHistory()



    function EnterToPanel ()
    {

        Dispatch({
            Type : CaseLoadin.LoginWait
        })

        Server(UserName , Password)
            .then(Response =>
                {
                    if (Response.username)
                    {
                        Dispatch({
                            Type : CaseLoadin.LoginSuccess,
                            User : Response.username
                        })
                    }

                    if (Response.Error)
                    {
                        SetError(Response.Error)
                        Dispatch({
                            Type : CaseLoadin.LoginError
                        })
                    }
                }
            )
    }

    useLayoutEffect(()=>{

        if (login)
        {
            return history.replace(from)
        }

        return function cleanup(){
            return login
        }

    } , [login])




    //==================================================================================
    const LoadingComponent = <h1> Loading ... </h1>

    const LoginComponent = (
        <>
            <h1>Login Page</h1>

            <form>
                <input type="text" placeholder='Name : admin' value={UserName} onChange={event => SetUserName(event.target.value)} />
                <input type="text" placeholder='Password : admin' value={Password} onChange={event => SetPassword(event.target.value)} />
            </form>

            <button onClick={EnterToPanel}>Login</button>
            <p>{Error}</p>
        </>
    )
    //==================================================================================


    return (
        <>
            {wait ? LoadingComponent : LoginComponent}
        </>
    )
}






































// if (!Response.username)
// {
//     Dispatch({
//         Type : CaseLoadin.LoginError
//     })
//         SetError(Response.Error)
// }
