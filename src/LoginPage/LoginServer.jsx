import {Server} from "../ServesApi/ServesLogin";
import {CaseLoadin} from "../StateLogin/StateLogin";


export default function LoginServer (AllRecentlyNameFamily , UserName , OldPassword , AllRecentlyPassword , Dispatch , SetLoading , SetError)
{

    return Server(UserName , OldPassword , AllRecentlyNameFamily , AllRecentlyPassword)
        .then(Response =>
            {
                if (Response.Access)
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