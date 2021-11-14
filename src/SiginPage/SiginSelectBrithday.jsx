import {useRef, useEffect, useState} from "react";
import BirthdayError from "./BirthdayError";
import {StateValue} from "../Context/Context";

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
                <select ref={DayRef} onChange={(e)=> SetDay(e.target.value)}>
                    {
                        Days().map((value , index)=> {
                                return <option key={index} >{value}</option>
                            }
                        )
                    }
                </select>
                <select ref={MonthRef}  onChange={(e)=> SetMonth( e.target.value)}>
                    {
                        Months.map((value, index) => {
                                return <option key={index}>{value}</option>
                            }
                        )
                    }
                </select>
                <select ref={YearRef} onChange={(e)=> SetYear(e.target.value)}>
                    {
                        Years().map((value, index) => {
                                return <option  key={index}>{value}</option>
                            }
                        )
                    }
                </select>

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