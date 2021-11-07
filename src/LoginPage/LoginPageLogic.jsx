import {useLayoutEffect, useState} from "react";
import {DispatchValue, StateValue} from "../Context/Context";
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
    const {login} = StateValue()
    const Dispatch = DispatchValue()
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
        if (login)
        {
            return history.replace('/UserPanel')
        }
    } , [login])



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



















