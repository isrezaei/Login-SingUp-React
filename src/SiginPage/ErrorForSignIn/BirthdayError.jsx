import {useEffect} from "react";

export default function BirthdayError ({DayRef , MonthRef , YearRef , BooleanOptionYears})
{
    useEffect(()=> {

        if (BooleanOptionYears)
        {
            DayRef.style.border = '1px solid #f44336'
            MonthRef.style.border = '1px solid #f44336'
            YearRef.style.border = '1px solid #f44336'
        }
        else
        {
            DayRef.style.border = ''
            MonthRef.style.border = ''
            YearRef.style.border = ''
        }

    } , [BooleanOptionYears , DayRef , MonthRef , YearRef])

    return null
}