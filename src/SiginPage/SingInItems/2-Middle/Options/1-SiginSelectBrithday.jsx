import {useRef, useEffect, useState} from "react";
import BirthdayError from "../../../ErrorForSignIn/BirthdayError";
import {StateValue} from "../../../../Context/Context";
import DayOptions from "./2-DayOptions";
import MonthOptions from "./3-MonthOptions";
import YearsOptions from "./4-YearsOptions";

export default function SiginSelectBirthday ({SetDay , Days , SetMonth , Months , SetYear , Years})
{

    const DayRef = useRef()
    const MonthRef = useRef()
    const YearRef = useRef()
    const { Year } = StateValue()

    const ForbiddenAge = ['2016' , '2017' , '2018' , '2019' , '2020' , '2021' , '2022']

    const [AllInputRefs , SetAllInputRefs] = useState('')
    const [BooleanOptionYears , SetBooleanOptionYears] = useState(false)


    useEffect(()=> {

        SetAllInputRefs({
            DayRef : DayRef.current,
            MonthRef : MonthRef.current,
            YearRef : YearRef.current
        })

        ForbiddenAge.includes(Year) ? SetBooleanOptionYears(true) : SetBooleanOptionYears(false)

    } , [Year])


    return (
        <div className='BrithdayInfo'>

            <div className='Birthday'>
                <p>Birthday</p>
            </div>

            <div className='Options'>

                <DayOptions
                    DayRef={DayRef}
                    SetDay={SetDay}
                    Days={Days}/>

                <MonthOptions
                    MonthRef={MonthRef}
                    SetMonth={SetMonth}
                    Months={Months}/>

                <YearsOptions
                    YearRef={YearRef}
                    SetYear={SetYear}
                    Years={Years}/>

            </div>

            {BooleanOptionYears && <p>You do not have the minimum age to register</p>}

            {
                AllInputRefs &&
                <BirthdayError
                    DayRef={AllInputRefs.DayRef}
                    MonthRef={AllInputRefs.MonthRef}
                    YearRef={AllInputRefs.YearRef}
                    BooleanOptionYears={BooleanOptionYears}
                />
            }

        </div>
    )
}