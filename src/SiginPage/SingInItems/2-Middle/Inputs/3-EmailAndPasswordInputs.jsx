import {StateValue} from "../../../../Context/Context";

export default function EmailAndPasswordInputs(
    {
        InputPhoneEmail ,
        SetPhoneEmail ,
        onBlurEmail ,
        BooleanBlurEmailPhone ,
        InputNewPassword ,
        SetNewPassword ,
        onBlurPassword ,
        BooleanBlurPassword
    })
{

    const {DarkMood} = StateValue()


    return (
        <>
            <input ref={InputPhoneEmail} type='text' placeholder='Mobile number or email'
                   onFocus={()=> SetPhoneEmail('.')}
                   onBlur={onBlurEmail}
                   onClick={(e)=> SetPhoneEmail(e.target.value)}
                   onChange={(e)=> SetPhoneEmail(e.target.value)}/>

            {BooleanBlurEmailPhone && <p className={DarkMood ? 'Dark_CorrectInfo' : 'CorrectInfo'}>Please enter your <b>email</b> or <b>number</b> correctly</p> }

            <input ref={InputNewPassword} type='text' placeholder='New Password'
                   onFocus={()=> SetNewPassword('.')}
                   onBlur={onBlurPassword}
                   onClick={(e)=> SetNewPassword(e.target.value)}
                   onChange={(e)=> SetNewPassword(e.target.value)}/>

            {BooleanBlurPassword && <p className={DarkMood ? 'Dark_CorrectInfo' : 'CorrectInfo'}>Passwords contain <b>lowercase</b> letters and <b>numbers</b> </p>}
        </>
    )
}