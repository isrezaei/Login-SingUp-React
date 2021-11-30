import {useState , useEffect} from "react";
import {StateValue} from "../../../Context/Context";
import Conditions from "../../SignInRegex&Condition/2-Conditions";
export default function SiginButton ({SubmitInfo})
{
    const [BooleanForButton , SetBooleanForButton] = useState(true)
    const {FirstName , LastName , Day , Month , Year , Gender} = StateValue()
    const {EmailValidation , PasswordValidation , OldValidations , AccessToEnableSignIn} = Conditions()


    console.log(FirstName)
    console.log(LastName)
    console.log(EmailValidation)
    console.log(PasswordValidation)
    console.log(OldValidations)
    console.log(Day , Month)
    console.log(Gender)

    useEffect(()=>{

      AccessToEnableSignIn ? SetBooleanForButton(false) : SetBooleanForButton(true)

    } , [FirstName , LastName , EmailValidation , PasswordValidation , Day , Year , Month , OldValidations , Gender])


    return  <button disabled={BooleanForButton} className='SiginButton' onClick={SubmitInfo}>Sign in</button>
}