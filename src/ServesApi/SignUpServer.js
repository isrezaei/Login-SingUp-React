import {nanoid} from "@reduxjs/toolkit";

export default function SignUpServer (prams)
{

    const {FirstName , LastName , Password , Email , Days , Months , Years} = prams

    const EmailValid = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    const PasswordValid = /(?=.*[0-9])+(?=.*[a-z])/

    const SignUpFirstName = FirstName !== ''
    const SignUpLastName = LastName !== ''
    const SignUpEmail = EmailValid.test(Email)
    const SignUpPassword = PasswordValid.test(Password)


    return new Promise((resolve, reject) => {

        if ( SignUpFirstName && SignUpLastName && SignUpEmail && SignUpPassword )
        {
            setTimeout(()=>{
                resolve({
                    id : nanoid(),
                    FirstName,
                    LastName ,
                    Email ,
                    Password,
                    Days ,
                    Months,
                    Years
                })
            } , 2000)
        }

        return setTimeout(()=>{

            reject(new Error('Your condition is false'))

        } , 2000)

    })
        .then(Response => Response)
        .catch(Response => Response)
}