import {useState} from "react";
import {useHistory} from "react-router-dom";
import {ChangeStateValue , StateValue} from "../Context/Context";
import {Months , Days , Years} from "./SettingsForSignIn/BulidOptionsForBirthdayInputs";
import {CaseLoadin} from "../StateLogin/StateLogin";
import SiginServer from "./SettingsForSignIn/SiginServer";
import SiginTitle from "./SingInItems/1-Header/SiginTitle";
import SiginInputs from "./SingInItems/2-Middle/Inputs/1-SiginInputs";
import SiginSelectBirthday from "./SingInItems/2-Middle/Options/1-SiginSelectBrithday";
import SiginSelectGender from "./SingInItems/2-Middle/Radio/SiginSelectGender";
import SiginSummary from "./SingInItems/3-Footer/SiginSummary";
import SiginButton from "./SingInItems/3-Footer/SiginButton";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import SiginSlider from "./SiginSlider";
import './SiginStyle/SiginPage.css'
import Footer from "../Footer/Footer";



export default function SiginPageLogic()
{
    const {replace} = useHistory()

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        NewPassword ,
        Gender,
        DarkMood
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

    const [Loading , SetLoading] = useState(false)



    const SubmitInfo = (e) =>
    {
        e.preventDefault()
        SiginServer(FirstName , LastName , PhoneEmail , NewPassword , Dispatch , replace)

        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)

        let NewUser ;

        localStorage.getItem('New-User') === null ? NewUser = [] : NewUser = JSON.parse(localStorage.getItem('New-User'))

        return NewUser.push({FirstName , LastName , NewPassword}) , localStorage.setItem('New-User' , JSON.stringify(NewUser))
    }

    return (

        <div className={'FlexSignPage'}>


            <div className={'SiginPage'}>
                <div className={DarkMood ? 'Dark_SiginForms' : 'SiginForms'}>
                    <SiginTitle/>
                    <form>
                        <SiginInputs
                            SetFirstName = {SetFirstName}
                            SetLastName = {SetLastName}
                            SetPhoneEmail = {SetPhoneEmail}
                            SetNewPassword = {SetNewPassword}
                        />

                        {Loading &&  <LoadingSpinner/>}

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
                <SiginSlider/>
            </div>

            <div style={{width : '80%'}}>
                <Footer/>
            </div>


        </div>

    )
}