import {useRef , useLayoutEffect  , useEffect, useState} from "react";
import SinginRefs from "./SinginRefs";


export default function SiginInputs({SetFirstName , SetLastName , SetPhoneEmail , SetNewPassword})
{

    const InputName = useRef()
    const InputLastName = useRef()
    const InputPhoneEmail = useRef()
    const InputNewPassword = useRef()

    const [AllInputRefs , SetAllInputRefs] = useState('')


    useEffect(()=> {

        SetAllInputRefs({
            InputName : InputName.current,
            InputLastName : InputLastName.current,
            InputPhoneEmail : InputPhoneEmail.current,
            InputNewPassword : InputNewPassword.current
        })

    } , [])


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
                   onBlur={(e)=> SetPhoneEmail(e.target.value)}
                   onFocus={(e)=> SetPhoneEmail('.')}
                   onChange={(e)=> SetPhoneEmail(e.target.value)}/>


            <input ref={InputNewPassword} type='text' placeholder='New Password'
                   onBlur={(e)=> SetNewPassword(e.target.value)}
                   onFocus={(e)=> SetNewPassword('.')}
                   onChange={(e)=> SetNewPassword(e.target.value)}/>


            {
                AllInputRefs &&

            <SinginRefs
                InputName={AllInputRefs.InputName}
                InputLastName={AllInputRefs.InputLastName}
                InputPhoneEmail={AllInputRefs.InputPhoneEmail}
                InputNewPassword={AllInputRefs.InputNewPassword}
            />

            }

        </>

    )
}