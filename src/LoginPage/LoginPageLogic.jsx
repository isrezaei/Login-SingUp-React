import {useLayoutEffect, useState} from "react";
import {ChangeStateValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {Server} from "../ServesApi/ServesApi";
import LoginPageHtml from "./LoginPageHtml";
import './LoginPage.css'


export default function LoginPageLogic () {




    const {UserName , OldPassword} = StateValue()
    const {SetUserName ,SetOldPassword} = ChangeStateValue()


    const [Error, SetError] = useState()
    const [Loading, SetLoading] = useState(false)

    const {Dispatch} = ChangeStateValue()




    function EnterToPanel (e)
    {
        e.preventDefault()
        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)

        Server(UserName , OldPassword)
            .then(Response =>
                {
                    if (Response.username)
                    {
                        Dispatch({
                            Type : CaseLoadin.LoginSuccess,
                            User : Response.username
                        })
                        SetLoading(false)
                        localStorage.setItem('User-Email' , Response.email)
                    }

                    if (Response.Error)
                    {
                        SetError(Response.Error)
                        SetLoading(false)
                        Dispatch({
                            Type : CaseLoadin.LoginError
                        })

                    }
                }
            )
    }



    // useLayoutEffect(()=>{
    //
    //     const local = localStorage.getItem('User-Email')
    //
    //     if(history.action === 'POP')
    //     {
    //         return history.replace('/MainPanel')
    //     }
    //
    //     if (local)
    //     {
    //         Dispatch({Type : CaseLoadin.LoginSuccess})
    //     }
    //
    //     if (State.login)
    //     {
    //         return history.replace('/MainPanel')
    //     }
    //
    // } , [State.login])



    return (
        <>
            <LoginPageHtml
                UserName={UserName}
                OldPassword={OldPassword}
                SetUserName={SetUserName}
                SetOldPassword={SetOldPassword}
                Error={Error}
                Loading={Loading}
                EnterToPanel={EnterToPanel}
            />
        </>
    )
}



















