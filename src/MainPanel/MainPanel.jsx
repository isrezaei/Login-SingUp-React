import {CaseLoadin} from "../StateLogin/StateLogin";
import {ChangeStateValue} from "../Context/Context";


export default function MainPanel ()
{


    const {
        Dispatch,
        SetFirstName,
        SetLastName,
        SetPhoneEmail,
        SetNewPassword,
        SetDay,
        SetMonth,
        SetYear,
        SetGender,} = ChangeStateValue()

    const LogOut = () =>
    {
        Dispatch({
            Type : CaseLoadin.LogOut
        })

        SetFirstName(null)
        SetLastName(null)
        SetPhoneEmail(null)
        SetNewPassword(null)
        SetDay('1')
        SetMonth('January')
        SetYear(null)
        SetGender(null)

    }


    return (
        <>
        <h1>Main Panel</h1>
        <button onClick={LogOut}>Log out</button>
        </>
    )
}