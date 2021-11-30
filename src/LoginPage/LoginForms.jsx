import LoadingSpinner from "../Spinner/LoadingSpinner";
import LoginTitle from "./LoginTitle";
import LoginInputs from "./LoginInputs";
import LoginSummary from "./LoginSummary";
import LoginButton from "./LoginButton";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginBorder from "./LoginBorder";
import LoginGoToSiginButton from "./LoginGoToSiginButton";
import {useHistory} from "react-router-dom";
import {StateValue} from "../Context/Context";

export default function LoginForms ({UserName , OldPassword , SetUserName , SetOldPassword , EnterToPanel , Loading ,Error})
{
    const {replace} = useHistory()
    const {DarkMood} = StateValue()

    const GoToSigin = () => {
        return replace('/Sigin')
    }

    const Spinner = Loading && <LoadingSpinner/>
    const WrongAlert = !Loading && <p className='WrongAlert'>{Error}</p>

    return (

        <div className= {DarkMood ? 'DarkLoginForm' : 'LoginForm'}>

            <LoginTitle/>

            <form>
                <LoginInputs
                    UserName={UserName}
                    OldPassword={OldPassword}
                    SetUserName={SetUserName}
                    SetOldPassword={SetOldPassword}/>

                <>{Spinner}</>

                <>{WrongAlert}</>

                <LoginSummary/>

                <LoginButton
                    EnterToPanel={EnterToPanel}/>

                <LoginForgotPassword/>

                <LoginBorder/>

                <LoginGoToSiginButton
                    GoToSigin={GoToSigin}/>
            </form>
        </div>
    )
}