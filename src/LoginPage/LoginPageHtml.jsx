import LoadingSpinner from "../LodingSpinner/LoadingSpinner";
import LoginTitle from "./LoginTitle";
import LoginInputs from "./LoginInputs";
import LoginSummary from "./LoginSummary";
import LoginButton from "./LoginButton";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginBorder from "./LoginBorder";
import LoginGoToSiginButton from "./LoginGoToSiginButton";
import {useHistory} from "react-router-dom";

export default function LoginPageHtml ({UserName , OldPassword , SetUserName , SetOldPassword , EnterToPanel , Loading ,Error})
{
    const {replace} = useHistory()

    const GoToSigin = () => {
        return replace('/Sigin')
    }

    const Spinner = Loading && <LoadingSpinner/>
    const WrongAlert = !Loading && <p className='WrongAlert'>{Error}</p>

    return (

        <div className='LoginPanel'>

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