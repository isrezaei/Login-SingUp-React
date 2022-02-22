import React from "react";

export default function SignUpInputs({GetSignUpInfo , WrongValidate , GetOnBlurBoolean , CheckOnBlur})
{
    return (
        <>
            <div className='NameInfo'>
                <input type="text" name='FirstName'
                       placeholder='First name'
                       onChange={GetSignUpInfo}
                       onBlur={GetOnBlurBoolean}/>

                {CheckOnBlur.FirstName && WrongValidate.FirstName && <span>Please enter your first name</span>}

                <input type="text"
                       name='LastName'
                       placeholder='Last name'
                       onChange={GetSignUpInfo}
                       onBlur={GetOnBlurBoolean}/>
                {CheckOnBlur.LastName && WrongValidate.LastName && <span>Please enter your last name</span>}
            </div>

            <>
                <input  type='text'
                        name='Email'
                        placeholder='Mobile number or email'
                        onChange={GetSignUpInfo}
                        onBlur={GetOnBlurBoolean}/>
                {CheckOnBlur.Email && WrongValidate.Email && <span>{WrongValidate.Email}</span>}


                <input  type='text'
                        name='Password'
                        placeholder='New Password'
                        onChange={GetSignUpInfo }
                        onBlur={GetOnBlurBoolean}/>
                {CheckOnBlur.Password && WrongValidate.Password && <span>{WrongValidate.Password}</span>}
            </>

        </>
    )
}