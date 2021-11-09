export default function LoginInputs ({UserName , OldPassword , SetUserName , SetOldPassword})
{
    return (
        <>
            <input type="text" placeholder='Name is admin' value={UserName} onChange={event => SetUserName(event.target.value)} />
            <input type="text" placeholder='Password is admin' value={OldPassword} onChange={event => SetOldPassword(event.target.value)} />
        </>
    )
}