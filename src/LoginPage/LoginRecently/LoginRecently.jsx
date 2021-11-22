import {useEffect , useState} from "react";
import './LoginRecently.css'

export default function LoginRecently ()
{

    const [Recently , SetRecenty] = useState({
        LocalUser : ['']
    })

    const [Rerander , SetRerander] = useState(false)




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
                <img className={'Avatar'} alt={''}/>
                <p className={'Name'}>{value.FirstName} {value.LastName}</p>
                <p onClick={()=>{return ( RemoveLocal(value.FirstName) , SetRerander(true))}} className={'Activity'}>Remove User</p>
            </div>
        )
    })




    return (
        <>
            <h3 className={'UpperText'}>Recently Login..</h3>

            <div className={'LoginRecently'}>

                {ShowRecently}

            </div>

        </>
    )
}