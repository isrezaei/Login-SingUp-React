export default function SignUpValidation (SignUpData) {
    const {
        FirstName,
        LastName,
        Email,
        Password,
        Days,
        Months,
        Years,
        Genders
    } = SignUpData


    const ForibedYears = []
    for (let C = 2013 ; C <= 2022 ; C++){ForibedYears.push(C)}


    const DataErros = {}

    //first name valid
    if (!FirstName) {
        DataErros.FirstName = false
    } else {
        delete DataErros.FirstName
    }
    //last name valid
    if (!LastName) {
        DataErros.LastName = false
    }
    else {
        delete DataErros.LastName
    }
    //email valid
    if (!Email)
    {
        DataErros.Email = 'you must entered password'
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
    else if (/(?=.*[0-9])+(?=.*[a-z])/.test(Password))
    {
        DataErros.Password = 'please enter your correct password'
    }
    else
    {
        delete DataErros.Password
    }

    console.log(ForibedYears.includes(parseInt(Years)))

    if (!ForibedYears.includes(parseInt(Years)))
    {
        DataErros.Years = 'Age Errors'
    }
    else
    {
        delete DataErros.Years
    }


    return DataErros

}