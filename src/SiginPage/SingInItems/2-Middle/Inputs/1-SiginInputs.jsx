import {useRef , useEffect, useState} from "react";
import {EmailValid , PhoneValid , PasswordValid} from "../../../SingInRegex/SiginRegexInputs";
import InputsError from "../../../ErrorForSignIn/InputsError";
import NameAndLastNameInput from "./2-NameAndLastNameInput";
import EmailAndPasswordInputs from "./3-EmailAndPasswordInputs";

export default function SiginInputs({SetFirstName , SetLastName , SetPhoneEmail , SetNewPassword})
{
    const InputName = useRef()
    const InputLastName = useRef()
    const InputPhoneEmail = useRef()
    const InputNewPassword = useRef()

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
        EmailValid.test(e.target.value) || PhoneValid.test(e.target.value) ? SetBooleanBlurEmailPhone(false) : SetBooleanBlurEmailPhone(true)
    }

    const onBlurPassword = (e) =>
    {
        SetNewPassword(e.target.value)
        PasswordValid.test(e.target.value) ? SetBooleanBlurPassword(false) : SetBooleanBlurPassword(true)
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