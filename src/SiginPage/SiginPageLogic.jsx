import {useHistory} from "react-router-dom";
import {ChangeStateValue , StateValue} from "../Context/Context";
import {Months , Days , Years} from "./BulidOptionsForBirthdayInputs";
import SiginServer from "./SiginServer";
import SiginTitle from "./SiginTitle";
import SiginInputs from "./SiginInputs";
import SiginSelectBirthday from "./SiginSelectBrithday";
import SiginSelectGender from "./SiginSelectGender";
import SiginSummary from "./SiginSummary";
import SiginButton from "./SiginButton";
import './SiginStyle/SiginPage.css'



export default function SiginPageLogic()
{
    const {replace} = useHistory()

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        NewPassword ,
        Day ,
        Month ,
        Year ,
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