import {useHistory} from "react-router-dom";
import {ChangeStateValue , StateValue} from "../Context/Context";
import {Months , Days , Years} from "./SettingsForSignIn/BulidOptionsForBirthdayInputs";
import SiginServer from "./SettingsForSignIn/SiginServer";
import SiginTitle from "./SingInItems/1-Header/SiginTitle";
import SiginInputs from "./SingInItems/2-Middle/Inputs/1-SiginInputs";
import SiginSelectBirthday from "./SingInItems/2-Middle/Options/1-SiginSelectBrithday";
import SiginSelectGender from "./SingInItems/2-Middle/Radio/SiginSelectGender";
import SiginSummary from "./SingInItems/3-Footer/SiginSummary";
import SiginButton from "./SingInItems/3-Footer/SiginButton";
import './SiginStyle/SiginPage.css'



export default function SiginPageLogic()
{
    const {replace} = useHistory()

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        NewPassword ,
        Gender
    } = StateValue()

    const {
        Dispatch,
        SetFirstName,
        SetLastName,
        SetPhoneEmail,
        SetNewPassword,
        SetDay,
        SetMonth,
        SetYear,
        SetGender
    } = ChangeStateValue()


    const SubmitInfo = (e) =>
    {
        e.preventDefault()
        SiginServer(FirstName , LastName , PhoneEmail , NewPassword , Dispatch ,replace)
    }

    return (
        <div className='SiginPanel'>
            <SiginTitle/>
            <form>
                <SiginInputs
                    SetFirstName = {SetFirstName}
                    SetLastName = {SetLastName}
                    SetPhoneEmail = {SetPhoneEmail}
                    SetNewPassword = {SetNewPassword}
                />

                <SiginSelectBirthday
                    SetDay={SetDay}
                    Days={Days}
                    SetMonth={SetMonth}
                    Months={Months}
                    SetYear={SetYear}
                    Years={Years}
                />

                <SiginSelectGender
                    SetGender={SetGender}
                    Gender={Gender}
                />

                <SiginSummary/>

                <SiginButton
                    SubmitInfo={SubmitInfo}
                />
            </form>
        </div>
    )
}