import {useLayoutEffect, useState} from "react";
import {ChangeStateValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {Server} from "../ServesApi/ServesApi";
import {useHistory} from "react-router-dom";
import LoginPageHtml from "./LoginPageHtml";
import './LoginPage.css'


export default function LoginPageLogic () {
    const [UserName, SetUserName] = useState('')
    const [Password, SetPassword] = useState('')
    const [Error, SetError] = useState()
    const [Loading, SetLoading] = useState(false)
    const {State} = StateValue()
    const {Dispatch} = ChangeStateValue()
    const history = useHistory()





    function EnterToPanel (e)
    {
        e.preventDefault()
        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)

        Server(UserName , Password)
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



    useLayoutEffect(()=>{

        const local = localStorage.getItem('User-Email')

        if(history.action === 'POP')
        {
            return history.replace('/UserPanel')
        }
        if (local)
        {
            Dispatch({Type : CaseLoadin.LoginSuccess})
        }
        if (State.login)
        {
            return history.replace('/UserPanel')
        }
    } , [State.login])



    return (
        <>
            <LoginPageHtml
                UserName={UserName}
                Password={Password}
                SetUserName={SetUserName}
                SetPassword={SetPassword}
                Error={Error}
                Loading={Loading}
                EnterToPanel={EnterToPanel}
            />
        </>
    )
}



















