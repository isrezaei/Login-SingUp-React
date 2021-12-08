export default function DayOptions ({DayRef , SetDay , Days})
{
    return (
        <select ref={DayRef} onChange={(e)=> SetDay(e.target.value)}>
            {
                Days().map((value , index)=> {
                        return <option key={index} >{value}</option>
                    }
                )
            }
        </select>
    )
}