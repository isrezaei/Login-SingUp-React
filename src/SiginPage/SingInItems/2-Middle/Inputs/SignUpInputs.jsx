import {useState} from "react";
import NameAndLastNameInput from "./2-NameAndLastNameInput";
import EmailAndPasswordInputs from "./3-EmailAndPasswordInputs";
import {useDispatch} from "react-redux";
import {SendSignUpData} from "../../../../##SignUp/SignUpSlice";





export default function SignUpInputs({SetFirstName , SetLastName , SetEmail , SetPassword , FirstName , LastName , Password , Email})
{






    return (

        <>
            <NameAndLastNameInput FirstName={FirstName} LastName={LastName} SetFirstName={SetFirstName} SetLastName={SetLastName}/>
            <EmailAndPasswordInputs SetEmail={SetEmail} SetPassword={SetPassword}/>
        </>

    )
}