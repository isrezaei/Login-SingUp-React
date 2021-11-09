export default function SiginSelectBirthday ({SetDay , Days , SetMonth , Months , SetYear , Years})
{
    return (
        <div className='BrithdayInfo'>

            <div className='Birthday'>
                <p>Birthday</p>
            </div>

            <div className='Options'>
                <select onChange={(e)=> SetDay(e.target.value)}>
                    {
                        Days().map((value , index)=> {
                                return <option key={index} >{value}</option>
                            }
                        )
                    }
                </select>
                <select  onChange={(e)=> SetMonth( e.target.value)}>
                    {
                        Months.map((value, index) => {
                                return <option key={index}>{value}</option>
                            }
                        )
                    }
                </select>
                <select  onChange={(e)=> SetYear(e.target.value)}>
                    {
                        Years().map((value, index) => {
                                return <option key={index}>{value}</option>
                            }
                        )
                    }
                </select>
            </div>
        </div>
    )
}