export default function SignUpValidation (SignUpData) {
    const {
        FirstName,
        LastName,
        Email,
        Password,
        Days,
        Months,
        Years,
        Gender
    } = SignUpData


    const ForibedYears = []
    for (let C = 2013 ; C <= 2022 ; C++){ForibedYears.push(C)}


    const DataErros = {}

    //first name valid
    if (!FirstName) {
        DataErros.FirstName = true
    } else {
        delete DataErros.FirstName
    }
    //last name valid
    if (!LastName) {
        DataErros.LastName = true
    }
    else {
        delete DataErros.LastName
    }
    //email valid
    if (!Email)
    {
        DataErros.Email = 'you must entered Email'
    }
    else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(Email))
    {
        DataErros.Email = 'please enter your correct Email'
    }
    else
    {
        delete DataErros.Email
    }
    //password valid
    if (!Password)
    {
        DataErros.Password = 'you must entered 6 characters'
    }
    else if (!/(?=.*[0-9])+(?=.*[a-z])/.test(Password))
    {
        DataErros.Password = 'please enter your correct password'
    }
    else
    {
        delete DataErros.Password
    }
    //Years Valid
    if (ForibedYears.includes(parseInt(Years)))
    {
        DataErros.Years = 'Age Errors'
    }
    else
    {
        delete DataErros.Years
    }

    if (!Gender)
    {
        DataErros.Gender = 'choice your gender'
    }
    else
    {
        delete DataErros.Gender
    }





    return DataErros

}