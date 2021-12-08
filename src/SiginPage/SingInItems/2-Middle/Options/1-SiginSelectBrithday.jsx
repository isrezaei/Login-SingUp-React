import {useEffect, useState} from "react";
import {GlobalRef} from "../../../../Context/Context";
import BirthdayError from "../../../ErrorForSignIn/BirthdayError";
import DayOptions from "./2-DayOptions";
import MonthOptions from "./3-MonthOptions";
import YearsOptions from "./4-YearsOptions";
import Conditions from "../../../SignInRegex&Condition/2-Conditions";

export default function SiginSelectBirthday ({SetDay , Days , SetMonth , Months , SetYear , Years})
{
    const [AllInputRefs , SetAllInputRefs] = useState('')
    const [BooleanOptionYears , SetBooleanOptionYears] = useState(false)

    const {DayRef , MonthRef , YearRef} = GlobalRef()
    const {OldValidations} = Conditions()



    useEffect(()=> {

        SetAllInputRefs({
            DayRef : DayRef.current,
            MonthRef : MonthRef.current,
            YearRef : YearRef.current
        })

    } , [])

    const HandelForbiddenAge = () => OldValidations ? SetBooleanOptionYears(false) : SetBooleanOptionYears(true)

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
                    Years={Years}
                    HandelForbiddenAge={HandelForbiddenAge}/>

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