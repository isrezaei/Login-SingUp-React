export default function YearsOptions ({Years , YearRef , SetYear , HandelForbiddenAge})
{
    return (
        <select ref={YearRef} onClick={HandelForbiddenAge} onChange={(e)=> SetYear(e.target.value)}>
            {
                Years().map((value, index) => {
                        return <option  key={index}>{value}</option>
                    }
                )
            }
        </select>
    )
}