import {useEffect , useState} from "react";
import {ChangeStateValue, GlobalRef , StateValue} from "../../Context/Context";
import PleaseSigin from '../../Images/PleaseSigin.gif'
import {CaseLoadin} from "../../StateLogin/StateLogin";
import RecentlyLoader from '../../Images/RecentlySpinner.gif'
import RecentlyServer from "./RecentlyServer";
import './LoginRecently.css'


export default function LoginRecently ()
{

    const {RefsRecently} = GlobalRef()

    const [Recently , SetRecenty] = useState({
        LocalUser : []
    })

    const [Rerander , SetRerander] = useState(false)

    const [Loading, SetLoading] = useState(false)

    const {Dispatch} = ChangeStateValue()



    const RecentlyInfo = (RecentlyName) => {

        Dispatch({
            Type : CaseLoadin.LoginWait
        })
        SetLoading(true)

        RecentlyServer(RecentlyName , SetLoading ,Dispatch)
    }



    useEffect(()=>{

        const Local = JSON.parse(localStorage.getItem('New-User'))
        SetRerander(false)
        Local && SetRecenty({
            LocalUser : Local
        })

    } , [Rerander])






    const RemoveLocal = (FirstName) =>
    {

        let Local ;
        localStorage.getItem('New-User') === null ? Local = [] : Local = JSON.parse(localStorage.getItem('New-User'))
        const Filter = Local.filter((value => value.FirstName !== FirstName))
        return localStorage.setItem('New-User' , JSON.stringify(Filter))
    }


    const ShowRecently = Recently.LocalUser.map((value, index)=>{

        return (
            <div key={index}  className={'Card'}>
                <img onClick={()=> RecentlyInfo(value.FirstName)} className={'Avatar'} alt={''}/>
                <p className={'Name'}>{value.FirstName} {value.LastName}</p>
                <p onClick={()=>{return ( RemoveLocal(value.FirstName) , SetRerander(true))}} className={'RemoveRecently'}>Remove User</p>
            </div>
        )
    })


    const RecentlyLength = Recently.LocalUser.length === 0

    return (
        <>
            {!RecentlyLength && <h3 className={'RecentlyLoginText'}>Recently Login {Loading && <img alt={''} className={'RecentlySpinner'} src={RecentlyLoader}/>}</h3>}

            <div className={Recently.LocalUser.length <= 1 ?  'LoginRecentlyForOnePerson' : 'LoginRecently'  }>

                {!RecentlyLength  ? ShowRecently :
                    <div className={'WellcomeMessage'}>
                        <img alt={''} className={'UserLogo'} src={PleaseSigin}/>
                        <h4 className={'WellcomeText'}>Hello my dear friend Please login or create an account </h4>
                    </div>
                }
            </div>

        </>
    )
}