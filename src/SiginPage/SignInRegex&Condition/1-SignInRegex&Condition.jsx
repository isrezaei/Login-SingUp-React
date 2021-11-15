import Conditions from "./3-Conditions";

export function SignInRegexCondition ()
{

    const {AccessToEnableSignIn , EmailValidation , PasswordValidation , OldValidations} = Conditions()

    return {AccessToEnableSignIn , EmailValidation , PasswordValidation , OldValidations}
}