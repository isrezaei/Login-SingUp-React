import React from "react";

export default function SignUpValidation (SignUpData) {

    const {FirstName, LastName, Email, Password, Years, Gender} = SignUpData
    const ForibedYears = []
    for (let C = 2013 ; C <= 2022 ; C++){ForibedYears.push(C)}

    const DataErros = {}

    //first name valid
    if (!FirstName) {
        DataErros.FirstName = <>Please enter your <b>first name </b></>
    } else {
        delete DataErros.FirstName
    }
    //last name valid
    if (!LastName) {
        DataErros.LastName = <>Please enter your <b>last name</b></>
    }
    else {
        delete DataErros.LastName
    }
    //email valid
    if (!Email)
    {
        DataErros.Email = <>Please enter your <b>email</b></>
    }
    else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(Email))
    {
        DataErros.Email = <>Please enter your <b>correct email</b></>
    }
    else
    {
        delete DataErros.Email
    }
    //password valid
    if (!Password)
    {
        DataErros.Password = <>Please enter your <b>password</b></>
    }
    else if (!/(?=.*[0-9])+(?=.*[a-z])/.test(Password))
    {
        DataErros.Password = <>Password contain <b>lowercase</b> letters and <b>number</b></>
    }
    else
    {
        delete DataErros.Password
    }
    //Years Valid
    if (ForibedYears.includes(parseInt(Years)))
    {
        DataErros.Years = <>You don't have <b>minimum age</b> to register</>
    }
    else
    {
        delete DataErros.Years
    }

    if (!Gender)
    {
        DataErros.Gender = <>choice your <b>gender</b></>
    }
    else
    {
        delete DataErros.Gender
    }

    return DataErros
}