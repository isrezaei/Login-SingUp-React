export default function SignUpButton ({SubmitInfo , AllowSignUp})
{

    return  <button disabled={!AllowSignUp()} className='SiginButton' onClick={SubmitInfo}>Sign in</button>
}