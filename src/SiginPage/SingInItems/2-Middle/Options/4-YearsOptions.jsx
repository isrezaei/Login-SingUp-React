export default function YearsOptions ({Years , YearRef , SetYear})
{
    return (
        <select ref={YearRef} onChange={(e)=> SetYear(e.target.value)}>
            {
                Years().map((value, index) => {
                        return <option  key={index}>{value}</option>
                    }
                )
            }
        </select>
    )
}