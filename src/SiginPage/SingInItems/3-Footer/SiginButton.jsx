import {useState , useEffect} from "react";
import {StateValue} from "../../../Context/Context";
import {SignInRegexCondition} from "../../SignInRegex&Condition/1-SignInRegex&Condition";
export default function SiginButton ({SubmitInfo})
{
    const [BooleanForButton , SetBooleanForButton] = useState(true)
    const {FirstName , LastName , Day , Month , Gender} = StateValue()
    const {EmailValidation , PasswordValidation , OldValidations , AccessToEnableSignIn} = SignInRegexCondition()

    useEffect(()=>{

      AccessToEnableSignIn ? SetBooleanForButton(false) : SetBooleanForButton(true)

    } , [FirstName , LastName , EmailValidation , PasswordValidation , Day , Month , OldValidations , Gender])


    return  <button disabled={BooleanForButton} className='SiginButton' onClick={SubmitInfo}>Sign in</button>
}