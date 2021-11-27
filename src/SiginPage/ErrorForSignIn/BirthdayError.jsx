import {useEffect} from "react";

export default function BirthdayError ({DayRef , MonthRef , YearRef , BooleanOptionYears})
{
    useEffect(()=> {

        if (BooleanOptionYears)
        {
            DayRef.style.border = '2px solid #ffa4a2'
            MonthRef.style.border = '2px solid #ffa4a2'
            YearRef.style.border = '2px solid #ffa4a2'
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