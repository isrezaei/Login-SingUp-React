import {useState} from "react";
import {ChangeStateValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import LoginPageHtml from "./LoginPageHtml";
import LoginServer from "./LoginStyle/LoginServer";
import LoginPageElement from "./LoginPageElements/LoginPageElement";
import './LoginStyle/LoginPage.css'
import LoginRecently from "./LoginRecently/LoginRecently";
import Footer from "../Footer/Footer";

export default function LoginPageLogic () {

    const [Error, SetError] = useState()
    const [Loading, SetLoading] = useState(false)
    const {UserName , OldPassword} = StateValue()
    const {SetUserName , SetOldPassword , Dispatch } = ChangeStateValue()

    function EnterToPanel (e)
    {
        e.preventDefault()
        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)

        LoginServer(UserName , OldPassword , Dispatch , SetLoading , SetError)
    }


    return (

        <div className={'ParentLoginPage'}>

            <div className={'LoginPage'}>

                <LoginPageElement/>

                <LoginPageHtml
                    UserName={UserName}
                    OldPassword={OldPassword}
                    SetUserName={SetUserName}
                    SetOldPassword={SetOldPassword}
                    Error={Error}
                    Loading={Loading}
                    EnterToPanel={EnterToPanel}
                />



            </div>

            <LoginRecently/>


            <Footer/>

        </div>
    )
}



















