import {useRef} from "react";

export function SignInInputRef()
{
    const InputName = useRef()
    const InputLastName = useRef()
    const InputPhoneEmail = useRef()
    const InputNewPassword = useRef()

    return {InputName , InputLastName , InputPhoneEmail , InputNewPassword}
}


export function SignInBirthdayRefs ()
{
    const DayRef = useRef()
    const MonthRef = useRef()
    const YearRef = useRef()

    return {DayRef, MonthRef, YearRef}
}
