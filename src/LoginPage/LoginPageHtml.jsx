import LoadingSpinner from "../LodingSpinner/LoadingSpinner";
import {useHistory} from "react-router-dom";

export default function LoginPageHtml ({UserName , OldPassword , SetUserName , SetOldPassword , EnterToPanel , Loading ,Error})
{

    const Spinner = Loading && <LoadingSpinner/>
    const WrongAlert = !Loading && <p className='WrongAlert'>{Error}</p>

    const history = useHistory()

    const GoToSigin = () => {
      return history.replace('/Sigin')
    }

    return (

        <div className='LoginPanel'>
            <p className='Title'>Login To Facebook</p>
            <p className='Alert'>if you want Access to this page first you must login</p>

            <form>
                <input type="text" placeholder='Name is admin' value={UserName} onChange={event => SetUserName(event.target.value)} />
                <input type="text" placeholder='Password is admin' value={OldPassword} onChange={event => SetOldPassword(event.target.value)} />

                <>{Spinner}</>
                <>{WrongAlert}</>

                <p className='Summary'>
                    By creating your facebook account, you agree to our <span style={{color : "#03a9f4" }}>Terms, Data
                    Policy</span> and <span style={{color : "#03a9f4"}}>Cookie Policy</span>, You may receive SMS notifications from us
                    and can opt out at any
                </p>
                <button className='LoginButton' onClick={EnterToPanel}>Login</button>

                <p className='ForgotPassword'>Forgot password ?</p>

                <hr style={{width:'100%' , margin : '1rem' , borderColor : 'rgba(222,222,222,0.55)'}}/>

                <button onClick={GoToSigin} className='CreateButton'> Create new account </button>
            </form>
        </div>
    )
}