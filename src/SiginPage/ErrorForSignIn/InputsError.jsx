import {useEffect} from "react";
import {StateValue} from "../../Context/Context";

export default function InputsError ({InputName , InputLastName , InputPhoneEmail , InputNewPassword , BooleanBlurEmailPhone , BooleanBlurPassword })
{

    const {
        FirstName ,
        LastName ,
    } = StateValue()


    useEffect(()=>
    {
        FirstName === ''  ?  InputName.style.border = '2px solid #ffa4a2' :  InputName.style.border = ''

        LastName === '' ? InputLastName.style.border = '2px solid #ffa4a2' : InputLastName.style.border = ''

        BooleanBlurEmailPhone ?   InputPhoneEmail.style.border = '2px solid #ffa4a2' : InputPhoneEmail.style.border = ''

        BooleanBlurPassword ? InputNewPassword.style.border = '2px solid #ffa4a2' :  InputNewPassword.style.border = ''

    } , [FirstName , LastName , BooleanBlurEmailPhone , BooleanBlurPassword])


    return null
}