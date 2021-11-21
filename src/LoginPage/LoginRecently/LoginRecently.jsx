import {useEffect , useState} from "react";
import RecentlyTime from "./RecentlyTime";
import './LoginRecently.css'

export default function LoginRecently ()
{

    const [Recently , SetRecenty] = useState({
        LocalUser : ['']
    })

    useEffect(()=>{

        const Local = JSON.parse(localStorage.getItem('New-User'))
        Local && SetRecenty({
            LocalUser : Local
        })

    } , [])


   const ShowRecently = Recently.LocalUser.map((value, index)=>{
        return (
            <div key={index}  className={'Card'}>
                <img className={'Avatar'} />
                <p className={'Name'}>{value.FirstName} {value.LastName}</p>
                <p className={'Activity'}><RecentlyTime/></p>
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