import {CaseLoadin} from "../StateLogin/StateLogin";
import {ChangeStateValue} from "../Context/Context";


export default function MainPanel ()
{


    const {Dispatch} = ChangeStateValue()

    const LogOut = () =>
    {
        Dispatch({
            Type : CaseLoadin.LogOut
        })

        localStorage.removeItem('User-Email')

    }



    return (
        <>
        <h1>Main Panel</h1>
        <button onClick={LogOut}>Log out</button>
        </>
    )
}