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
                   onChange={(e)=> SetPhoneEmail(e.target.value)}/>

            {BooleanBlurEmailPhone && <p>You're need a Right Informations</p> }

            <input ref={InputNewPassword} type='text' placeholder='New Password'
                   onFocus={()=> SetNewPassword('.')}
                   onBlur={onBlurPassword}
                   onChange={(e)=> SetNewPassword(e.target.value)}/>

            {BooleanBlurPassword && <p>You Need true Password</p>}
        </>
    )
}