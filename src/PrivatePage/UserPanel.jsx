import {StateValue} from "../Context/Context";
import {Redirect} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {DispatchValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {useEffect} from "react";

export default function UserPanel ()
{

    const {login} = StateValue()

    const location = useLocation()

    const Dispatch = DispatchValue()


    const LogOut = () =>
    {
       Dispatch({
           Type : CaseLoadin.LogOut
       })

        localStorage.clear('User-Email')
    }


    const RedirectComponent = (

        <Redirect to={
            {
                pathname : '/Login',
                from : location
            }
        }/>
    )



    console.log(login)


    const PanelComponent = (
        <>
            <h1>Welcome To panel</h1>
            <button onClick={LogOut}>Logout</button>
        </>
    )

    return (
        <>
            {login ? PanelComponent : RedirectComponent}
        </>

    )
}