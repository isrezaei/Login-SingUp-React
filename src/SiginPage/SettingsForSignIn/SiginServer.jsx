import ServerSigin from "../../ServesApi/ServerSigin";
import {CaseLoadin} from "../../StateLogin/StateLogin";

export default function SiginServer (FirstName , LastName , PhoneEmail , NewPassword , Dispatch , replace)
{
    return (
        ServerSigin(FirstName , LastName , PhoneEmail , NewPassword)
            .then(Response => {
                if (Response.FirstName)
                {
                    Dispatch({Type : CaseLoadin.LoginSuccess})
                    return replace('/Login')
                }
            })
    )
}