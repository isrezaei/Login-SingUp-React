export default function NameAndLastNameInput ({InputName , InputLastName , SetLastName , SetFirstName})
{
    return (
        <div className='NameInfo'>

            <input  ref={InputName} type="text" placeholder='First name'
                    onFocus={()=> SetFirstName('.')}
                    onClick={(e)=> SetFirstName(e.target.value)}
                    onBlur={(e)=> SetFirstName(e.target.value)}
                    onChange={(e)=> SetFirstName(e.target.value)}/>

            <input ref={InputLastName} type="text" placeholder='Last name'
                   onFocus={()=> SetLastName('.')}
                   onClick={(e)=> SetLastName(e.target.value)}
                   onBlur={(e)=> SetLastName(e.target.value)}
                   onChange={(e)=> SetLastName(e.target.value)} />
        </div>
    )
}