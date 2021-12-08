export default function LoginInputs ({UserName , OldPassword , SetUserName , SetOldPassword})
{
    return (
        <>
            <input type="text" placeholder='Name and Last Name' value={UserName} onChange={event => SetUserName(event.target.value)} />
            <input type="text" placeholder='Password' value={OldPassword} onChange={event => SetOldPassword(event.target.value)} />
        </>
    )
}