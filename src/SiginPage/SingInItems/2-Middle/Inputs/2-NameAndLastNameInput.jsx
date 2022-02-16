import '../../../../##SignUp/SignUpErrorStyle/SignUpErrorStyle.css'

export default function NameAndLastNameInput ({SetLastName , SetFirstName , FirstName , LastName})
{

    const Style = FirstName === '' ? 'ErrorInput' : 'NormalInput'

    console.log(Style)


    return (
        <div className='NameInfo'>

            <input
                type="text" placeholder='First name'
                onBlur={(e)=> SetFirstName(e.target.value)}
                onChange={(e)=> SetFirstName(e.target.value)}/>

            <input type="text" placeholder='Last name'
                   onFocus={()=> SetLastName(null)}
                   onBlur={(e)=> SetLastName(e.target.value)}
                   onChange={(e)=> SetLastName(e.target.value)} />
        </div>
    )
}