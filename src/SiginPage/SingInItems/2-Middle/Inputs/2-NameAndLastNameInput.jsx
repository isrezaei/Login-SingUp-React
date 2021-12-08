export default function NameAndLastNameInput ({InputName , InputLastName , SetLastName , SetFirstName})
{
    return (
        <div className='NameInfo'>

            <input  ref={InputName} type="text" placeholder='First name'
                    onFocus={()=> SetFirstName('.')}
                    onBlur={(e)=> SetFirstName(e.target.value)}
                    onChange={(e)=> SetFirstName(e.target.value)}/>

            <input ref={InputLastName} type="text" placeholder='Last name'
                   onFocus={()=> SetLastName('.')}
                   onBlur={(e)=> SetLastName(e.target.value)}
                   onChange={(e)=> SetLastName(e.target.value)} />
        </div>
    )
}