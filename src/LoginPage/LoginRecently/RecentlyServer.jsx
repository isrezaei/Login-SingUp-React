import ServerRecently from "../../ServesApi/ServerRecently";
import {CaseLoadin} from "../../StateLogin/StateLogin";

export default function RecentlyServer (RecentlyNameFamily , SetLoading , Dispatch)
{
    ServerRecently(RecentlyNameFamily)
        .then(Response => {
            if (Response)
            {
                Dispatch({
                    Type : CaseLoadin.LoginSuccess
                })
                SetLoading(false)
            }
        })
}