export default function SiginInputs({SetFirstName , SetLastName , SetPhoneEmail , SetNewPassword})
{
    return (
        <>
            <div className='NameInfo'>
                <input type="text" placeholder='First name' onChange={(e)=> SetFirstName(e.target.value)}/>
                <input type="text" placeholder='Last name'  onChange={(e)=> SetLastName(e.target.value)} />
            </div>

            <input type='text' placeholder='Mobile number or email' onChange={(e)=> SetPhoneEmail(e.target.value)}/>
            <input type='text' placeholder='New Password' onChange={(e)=> SetNewPassword(e.target.value)}/>
        </>
    )
}