import {StateValue} from "../../Context/Context";
import Regex from "./1-Regex";

const ForbiddenAge = ['2016' , '2017' , '2018' , '2019' , '2020' , '2021' , '2022' , undefined]
export default function Conditions ()
{
    const {EmailRegex , PhoneRegex , PasswordRegex} = Regex()
    const {FirstName , LastName , PhoneEmail , NewPassword , Year , Day , Month , Gender} = StateValue()

    const EmailValidation = EmailRegex.test(PhoneEmail) || PhoneRegex.test(PhoneEmail)
    const PasswordValidation = PasswordRegex.test(NewPassword)
    const OldValidations = !ForbiddenAge.includes(Year)


    const AccessToEnableSignIn = FirstName && LastName && EmailValidation && PasswordValidation && Day && Month && OldValidations && Gender

    return {AccessToEnableSignIn , EmailValidation , PasswordValidation , OldValidations}
}