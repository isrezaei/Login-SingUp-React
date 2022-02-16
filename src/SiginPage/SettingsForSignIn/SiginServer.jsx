import SignUpServer from "../../ServesApi/SignUpServer";
import {CaseLoadin} from "../../StateLogin/StateLogin";

export default function SiginServer (FirstName , LastName , PhoneEmail , NewPassword , Dispatch , replace)
{
    return (
        SignUpServer(FirstName , LastName , PhoneEmail , NewPassword)

            .then(Response => {
                if (Response.FirstName)
                {
                    Dispatch({Type : CaseLoadin.LoginSuccess})
                    return replace('/Login')
                }
            })
    )
}