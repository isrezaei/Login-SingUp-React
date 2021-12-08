export default function MonthOptions ({MonthRef , SetMonth , Months})
{
    return (
        <select ref={MonthRef}  onChange={(e)=> SetMonth( e.target.value)}>
            {
                Months.map((value, index) => {
                        return <option key={index}>{value}</option>
                    }
                )
            }
        </select>
    )
}