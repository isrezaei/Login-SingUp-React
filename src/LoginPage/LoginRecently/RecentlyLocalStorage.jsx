import {useState , useEffect} from "react";
import {CaseLoadin} from "../../StateLogin/StateLogin";
import RecentlyServer from "./RecentlyServer";
import {ChangeStateValue} from "../../Context/Context";

export default function RecentlyLocalStorage ()
{
    const [Recently , SetRecenty] = useState({LocalUser : []})
    const [Rerander , SetRerander] = useState(false)
    const [Loading, SetLoading] = useState(false)
    const {Dispatch} = ChangeStateValue()


    useEffect(()=>{

        SetRerander(false)
        const Local = JSON.parse(localStorage.getItem('New-User'))
        Local && SetRecenty({LocalUser : Local})

    } , [Rerander])


    const RecentlyInfo = (RecentlyName) => {

        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)
        RecentlyServer(RecentlyName , SetLoading ,Dispatch)
    }

    const RemoveItemOfLocal = (FirstName) =>
    {
        let Local ;
        localStorage.getItem('New-User') === null ? Local = [] : Local = JSON.parse(localStorage.getItem('New-User'))
        const Filter = Local.filter(value => value.FirstName !== FirstName)
        return localStorage.setItem('New-User' , JSON.stringify(Filter))
    }

    const RemoveItemOfRecently = (value) =>
    {
        RemoveItemOfLocal(value)
        SetRerander(true)
    }

    const ShowRecently = Recently.LocalUser.map((value, index)=>
    {
        return (
            <div key={index} className={'Card'}>
                <img draggable={false} className={'Avatar'} alt={''}/>
                <p onClick={()=> RecentlyInfo(value.FirstName)} className={'Name'}> {value.FirstName} {value.LastName}</p>
                <p onClick={()=> RemoveItemOfRecently(value.FirstName)} className={'RemoveRecently'}>Remove User</p>
            </div>
        )
    })

    return {ShowRecently , Loading , Recently}
}
