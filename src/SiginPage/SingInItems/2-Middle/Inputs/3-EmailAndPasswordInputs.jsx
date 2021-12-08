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
    return (
        <>
            <input ref={InputPhoneEmail} type='text' placeholder='Mobile number or email'
                   onFocus={()=> SetPhoneEmail('.')}
                   onBlur={onBlurEmail}
                   onClick={(e)=> SetPhoneEmail(e.target.value)}
                   onChange={(e)=> SetPhoneEmail(e.target.value)}/>

            {BooleanBlurEmailPhone && <p>You're need a Right Informations</p> }

            <input ref={InputNewPassword} type='text' placeholder='New Password'
                   onFocus={()=> SetNewPassword('.')}
                   onBlur={onBlurPassword}
                   onClick={(e)=> SetNewPassword(e.target.value)}
                   onChange={(e)=> SetNewPassword(e.target.value)}/>

            {BooleanBlurPassword && <p>You Need true Password</p>}
        </>
    )
}