import {useEffect, useState} from "react";
import Conditions from "../../../SignInRegex&Condition/2-Conditions";
import InputsError from "../../../ErrorForSignIn/InputsError";
import NameAndLastNameInput from "./2-NameAndLastNameInput";
import EmailAndPasswordInputs from "./3-EmailAndPasswordInputs";
import {GlobalRef} from "../../../../Context/Context";

export default function SiginInputs({SetFirstName , SetLastName , SetPhoneEmail , SetNewPassword})
{

    const {
        InputName ,
        InputLastName ,
        InputPhoneEmail ,
        InputNewPassword} = GlobalRef()

    const {EmailValidation , PasswordValidation } = Conditions()

    const [AllInputRefs , SetAllInputRefs] = useState('')
    const [BooleanBlurEmailPhone , SetBooleanBlurEmailPhone] = useState(false)
    const [BooleanBlurPassword , SetBooleanBlurPassword] = useState(false)


    useEffect(()=> {

        SetAllInputRefs({
            InputName : InputName.current,
            InputLastName : InputLastName.current,
            InputPhoneEmail : InputPhoneEmail.current,
            InputNewPassword : InputNewPassword.current
        })

    } , [])


    const onBlurEmail= (e) =>
    {
        SetPhoneEmail(e.target.value)
        EmailValidation ? SetBooleanBlurEmailPhone(false) : SetBooleanBlurEmailPhone(true)
    }

    const onBlurPassword = (e) =>
    {
        SetNewPassword(e.target.value)
        PasswordValidation ? SetBooleanBlurPassword(false) : SetBooleanBlurPassword(true)
    }


    return (

        <>

            <NameAndLastNameInput
                InputName={InputName}
                SetFirstName={SetFirstName}
                InputLastName={InputLastName}
                SetLastName={SetLastName}/>


            <EmailAndPasswordInputs
                InputPhoneEmail={InputPhoneEmail}
                SetPhoneEmail={SetPhoneEmail}
                onBlurEmail={onBlurEmail}
                BooleanBlurEmailPhone={BooleanBlurEmailPhone}
                InputNewPassword={InputNewPassword}
                SetNewPassword={SetNewPassword}
                onBlurPassword={onBlurPassword}
                BooleanBlurPassword={BooleanBlurPassword}
                 />


            {
                AllInputRefs &&

                <InputsError
                    InputName={AllInputRefs.InputName}
                    InputLastName={AllInputRefs.InputLastName}
                    InputPhoneEmail={AllInputRefs.InputPhoneEmail}
                    InputNewPassword={AllInputRefs.InputNewPassword}
                    BooleanBlurEmailPhone={BooleanBlurEmailPhone}
                    BooleanBlurPassword={BooleanBlurPassword}
                />
            }

        </>

    )
}