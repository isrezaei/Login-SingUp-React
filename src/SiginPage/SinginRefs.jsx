import {useEffect} from "react";
import {StateValue} from "../Context/Context";



export default function SinginRefs ({InputName , InputLastName , InputPhoneEmail , InputNewPassword})
{

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        NewPassword ,
        Day ,
        Month ,
        Year ,
        Gender
    } = StateValue()

    console.log(Day)

    useEffect(()=>
    {

        FirstName === '' ?  InputName.style.backgroundColor = '#ffa4a2' :  InputName.style.backgroundColor = ''

        LastName === '' ? InputLastName.style.backgroundColor = '#ffa4a2' : InputLastName.style.backgroundColor = ''

        PhoneEmail === '' ?   InputPhoneEmail.style.backgroundColor = '#ffa4a2' : InputPhoneEmail.style.backgroundColor = ''

        NewPassword === '' ? InputNewPassword.style.backgroundColor = '#ffa4a2' :  InputNewPassword.style.backgroundColor = ''


    } , [FirstName , LastName , PhoneEmail , NewPassword])






    return null
}