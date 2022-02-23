import './Footer.scss'

export default function SignUpFooter ({SubmitInfo})
{
    return (
        <>
            <p className='Summary'>
                By clicking Sign Up, you agree to our <span style={{color : "#03a9f4" }}>Terms , Data , Policy</span> You may receive SMS Notifications from us and can opt out any time.
            </p>
            <button className='SignUpSubmit' onClick={SubmitInfo}>Sign Up</button>
        </>
    )
}