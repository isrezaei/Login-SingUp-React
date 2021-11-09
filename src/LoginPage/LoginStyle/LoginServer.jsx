import {Server} from "../../ServesApi/ServesApi";
import {CaseLoadin} from "../../StateLogin/StateLogin";

export default function LoginServer (UserName , OldPassword , Dispatch , SetLoading , SetError)
{
    return Server(UserName , OldPassword)
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