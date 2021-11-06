import {useLayoutEffect, useState} from "react";
import {DispatchValue, StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import {Server} from "../ServesApi/ServesApi";
import {useHistory , useLocation} from "react-router-dom";
import './LoginPage.css'


export default function LoginPage ()
{
    const [UserName , SetUserName] = useState('')
    const [Password , SetPassword] = useState('')
    const [Error , SetError] = useState()
    const [Loading , SetLoading] = useState(false)

    const Dispatch = DispatchValue()
    const {login , wait}  = StateValue()



    const {from} = useLocation()
    const history = useHistory()



    function EnterToPanel ()
    {

        Dispatch({
            Type : CaseLoadin.LoginWait
        })

        Server(UserName , Password)
            .then(Response =>
                {
                    if (Response.username)
                    {
                        Dispatch({
                            Type : CaseLoadin.LoginSuccess,
                            User : Response.username
                        })

                        localStorage.setItem('User-Email' , Response.email)
                    }

                    if (Response.Error)
                    {
                        SetError(Response.Error)
                        Dispatch({
                            Type : CaseLoadin.LoginError
                        })
                    }
                }
            )
    }



    useLayoutEffect(()=>{

        const loacal = localStorage.getItem('User-Email')

        if (loacal)
        {
            Dispatch({Type : CaseLoadin.LoginSuccess})
        }


        if (login)
        {
            return history.replace(from)
        }


    } , [login])





    const LoadingComponent = <h1> Loading ... </h1>

    const LoginComponent = (


        <div className='LoginPanel'>
            <p className='Title'>Login To Facebook</p>
            <p className='Alert'>if you want Access to this page first you must login</p>

            <form>
                <input type="text" placeholder='Name : admin' value={UserName} onChange={event => SetUserName(event.target.value)} />
                <input type="text" placeholder='Password : admin' value={Password} onChange={event => SetPassword(event.target.value)} />

                <p className='WrongAlert'>{Error}</p>
                <p className='Summary'>
                    By creating your facebook account, you agree to our <span style={{color : "#03a9f4" }}>Terms, Data
                    Policy</span> and <span style={{color : "#03a9f4"}}>Cookie Policy</span>, You may receive SMS notifications from us
                    and can opt out at any
                </p>

                <button className='LoginButton' onClick={EnterToPanel}>Login</button>

                <p className='ForgotPassword'>Forgot password ?</p>

                <hr style={{width:'100%' , margin : '1rem' , backgroundColor : '#00a0fd'}}/>

                <button className='CreateButton'> Create new account</button>


            </form>

        </div>
    )


    return (
        <>
            {wait ? LoadingComponent : LoginComponent}
        </>
    )
}






































// if (!Response.username)
// {
//     Dispatch({
//         Type : CaseLoadin.LoginError
//     })
//         SetError(Response.Error)
// }
