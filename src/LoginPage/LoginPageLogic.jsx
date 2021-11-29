import {useState, useEffect, useLayoutEffect} from "react";
import {ChangeStateValue, GlobalRef, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import LoginForms from "./LoginForms";
import LoginServer from "./LoginServer";
import LoginPageElement from "./LoginPageElements/LoginPageElement";
import LoginRecently from "./LoginRecently/LoginRecently";
import Footer from "../Footer/Footer";
import './LoginStyle/LoginPage.css'

export default function LoginPageLogic () {

    const [Error, SetError] = useState()
    const [Loading, SetLoading] = useState(false)
    const {UserName , OldPassword} = StateValue()
    const {SetUserName , SetOldPassword , Dispatch } = ChangeStateValue()
    let AllRecentlyPassword = []
    let AllRecentlyNameFamily= []

    const {
        FirstName ,
        LastName ,
        NewPassword ,

    } = StateValue()

    useEffect(()=>{

        let NewUser ;

        localStorage.getItem('New-User') === null ? localStorage.setItem('New-User' , JSON.stringify([])) : JSON.parse(localStorage.getItem('New-User'))


    } , [Loading])



    function EnterToPanel (e)
    {
        e.preventDefault()
        Dispatch({
            Type : CaseLoadin.LoginWait
        })

        SetLoading(true)


        const RecentNameAndPassword = JSON.parse(localStorage.getItem('New-User'))


        RecentNameAndPassword.map(value => {
            AllRecentlyPassword.push(value.NewPassword)
            AllRecentlyNameFamily.push(`${value.FirstName} ${value.LastName}`)
        })


        LoginServer(AllRecentlyNameFamily , UserName , OldPassword , AllRecentlyPassword , Dispatch , SetLoading , SetError)
    }


    return (

        <div className={'ParentLoginPage'}>

            <div className={'LoginPage'}>

                <div className={'FormsTypeWriteImage'}>

                    <LoginPageElement/>

                    <LoginForms
                        UserName={UserName}
                        OldPassword={OldPassword}
                        SetUserName={SetUserName}
                        SetOldPassword={SetOldPassword}
                        Error={Error}
                        Loading={Loading}
                        EnterToPanel={EnterToPanel}
                    />
                </div>
            </div>


            <div className={'RecentlyFooter'}>
                <LoginRecently/>
                <Footer/>
            </div>


        </div>
    )
}



















