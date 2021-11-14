import {useRef , useLayoutEffect  , useEffect, useState} from "react";
import SinginError from "./SinginError";

import {EmailValid , PhoneValid , PasswordValid} from "./SiginRegexInputs";
import {StateValue} from "../Context/Context";

export default function SiginInputs({SetFirstName , SetLastName , SetPhoneEmail , SetNewPassword})
{

    const InputName = useRef()
    const InputLastName = useRef()
    const InputPhoneEmail = useRef()
    const InputNewPassword = useRef()

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


    const HandelUnBlurEmailInput = (e) =>
    {
        SetPhoneEmail(e.target.value)

        if (!EmailValid.test(e.target.value) || !PhoneValid.test(e.target.value))
        {
            SetBooleanBlurEmailPhone(true)
        }

        if (EmailValid.test(e.target.value) || PhoneValid.test(e.target.value))
        {
            SetBooleanBlurEmailPhone(false)
        }

    }

    const HandelBlurPassword = (e) =>
    {
        SetNewPassword(e.target.value)

        if (!PasswordValid.test(NewPassword))
        {
            SetBooleanBlurPassword(true)
        }
        if (PasswordValid.test(NewPassword))
        {
            SetBooleanBlurPassword(false)
        }
    }


    return (

        <>
            <div className='NameInfo'>

                <input  ref={InputName} type="text" placeholder='First name'
                        onBlur={(e)=> SetFirstName(e.target.value)}
                        onFocus={(e)=> SetFirstName('.')}
                        onChange={(e)=> SetFirstName(e.target.value)}/>

                <input ref={InputLastName} type="text" placeholder='Last name'
                       onBlur={(e)=> SetLastName(e.target.value)}
                       onFocus={(e)=> SetLastName('.')}
                       onChange={(e)=> SetLastName(e.target.value)} />
            </div>


            <input ref={InputPhoneEmail} type='text' placeholder='Mobile number or email'
                   onBlur={HandelUnBlurEmailInput}
                   onFocus={(e)=> SetPhoneEmail('.')}
                   onChange={(e)=> SetPhoneEmail(e.target.value)}/>

            {BooleanBlurEmailPhone && <p style={{fontSize : '12px'}}>You're need a Right Informations</p> }


            <input ref={InputNewPassword} type='text' placeholder='New Password'
                   onBlur={HandelBlurPassword}
                   onFocus={(e)=> SetNewPassword('.')}
                   onChange={(e)=> SetNewPassword(e.target.value)}/>

            {BooleanBlurPassword && <p style={{fontSize : '12px'}}>You Need true Password</p>}


            {
                AllInputRefs &&

                <SinginError
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