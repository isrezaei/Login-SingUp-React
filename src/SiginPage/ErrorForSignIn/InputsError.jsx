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
        FirstName === ''  ?  InputName.style.border = '1px solid #f44336' :  InputName.style.border = ''

        LastName === '' ? InputLastName.style.border = '1px solid #f44336' : InputLastName.style.border = ''

        BooleanBlurEmailPhone ?   InputPhoneEmail.style.border = '1px solid #f44336' : InputPhoneEmail.style.border = ''

        BooleanBlurPassword ? InputNewPassword.style.border = '1px solid #f44336' :  InputNewPassword.style.border = ''

    } , [FirstName , LastName , BooleanBlurEmailPhone , BooleanBlurPassword ])


    return null
}