import {ChangeStateValue, StateValue} from "../Context/Context";
import {Redirect} from "react-router-dom";
import {useLocation} from "react-router-dom";

import {CaseLoadin} from "../StateLogin/StateLogin";
import {useEffect} from "react";

export default function UserPanel ()
{


    const location = useLocation()

    const {State , BlueHeader} = StateValue()
    const {Dispatch} = ChangeStateValue()



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




    const PanelComponent = (
        <>
            <h1>Welcome To panel</h1>
            <button onClick={LogOut}>Logout</button>
        </>
    )

    return (
        <>
            {State.login ? PanelComponent : RedirectComponent}
        </>

    )
}