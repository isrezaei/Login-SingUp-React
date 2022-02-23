import React from "react";
import './Inputs.scss'

export default function SignUpInputs({GetSignUpInfo , WrongValidate , GetOnBlurBoolean , CheckOnBlur})
{
    return (
        <div className='PersonalInfo'>

            <section>

                <input
                    className={(CheckOnBlur.FirstName && WrongValidate.FirstName) ? 'RedBorder' : '' }
                    type="text"
                    name='FirstName'
                    placeholder='First name'
                    onChange={GetSignUpInfo}
                    onBlur={GetOnBlurBoolean}/>

                {CheckOnBlur.FirstName && WrongValidate.FirstName && <span className='ErrorText'>{WrongValidate.FirstName}</span>}

            </section>


            <section>

                <input
                    className={(CheckOnBlur.LastName && WrongValidate.LastName) ? 'RedBorder' : '' }
                    type="text"
                    name='LastName'
                    placeholder='Last name'
                    onChange={GetSignUpInfo}
                    onBlur={GetOnBlurBoolean}/>

                {CheckOnBlur.LastName && WrongValidate.LastName && <span className='ErrorText'>{WrongValidate.LastName}</span>}

            </section>


            <section>

                <input
                    className={(CheckOnBlur.Email && WrongValidate.Email) ? 'RedBorder' : '' }
                    type='text'
                    name='Email'
                    placeholder='Email'
                    onChange={GetSignUpInfo}
                    onBlur={GetOnBlurBoolean}/>
                {CheckOnBlur.Email && WrongValidate.Email && <span className='ErrorText'>{WrongValidate.Email}</span>}

            </section>


            <section>
                <input
                    className={(CheckOnBlur.Password && WrongValidate.Password) ? 'RedBorder' : '' }
                    type='text'
                    name='Password'
                    placeholder='Password'
                    onChange={GetSignUpInfo }
                    onBlur={GetOnBlurBoolean}/>
                {CheckOnBlur.Password && WrongValidate.Password && <span className='ErrorText'>{WrongValidate.Password}</span>}
            </section>


        </div>
    )
}