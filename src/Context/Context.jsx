import {useContext, createContext, useReducer, useState } from "react";
import {initState , Reducer} from "../StateLogin/StateLogin";
import {SignInInputRef , SignInBirthdayRefs , RecentlyRefs} from "./GlobalRefs";

const UseState = createContext('')
const UseChangeState = createContext('')
const UseGlobalRef = createContext('')

export function StateValue ()
{
    return useContext(UseState)
}

export function ChangeStateValue ()
{
    return useContext(UseChangeState)
}

export function GlobalRef()
{
    return useContext(UseGlobalRef)
}

export default function AuthProvider({children})
{


    const {DayRef , MonthRef , YearRef} = SignInBirthdayRefs()
    const {InputName , InputLastName , InputPhoneEmail , InputNewPassword} = SignInInputRef()
    const {RecentlyRef} = RecentlyRefs()

    const [State , Dispatch] = useReducer(Reducer , initState)

    const [UserName, SetUserName] = useState('')
    const [OldPassword, SetOldPassword] = useState('')
    const [FirstName , SetFirstName] = useState()
    const [LastName , SetLastName] = useState()
    const [PhoneEmail , SetPhoneEmail] = useState()
    const [NewPassword , SetNewPassword] = useState()
    const [Day , SetDay] = useState('1')
    const [Month , SetMonth] = useState('January')
    const [Year , SetYear] = useState()
    const [Gender , SetGender] = useState()
    const [DarkMood , SetDarkMood] = useState(false)




    return (
        <UseGlobalRef.Provider value={
            {
                DayRef ,
                MonthRef ,
                YearRef,
                RecentlyRef,
                InputName ,
                InputLastName ,
                InputPhoneEmail ,
                InputNewPassword,
            }
        }>
            <UseState.Provider
                value={
                    {
                        State ,
                        FirstName ,
                        LastName ,
                        PhoneEmail,
                        NewPassword ,
                        OldPassword,
                        Day ,
                        Month ,
                        Year ,
                        Gender,
                        UserName,
                        DarkMood
                    }
                }
            >
                <UseChangeState.Provider
                    value={
                        {
                            Dispatch,
                            SetFirstName,
                            SetLastName,
                            SetPhoneEmail,
                            SetNewPassword,
                            SetDay,
                            SetMonth,
                            SetYear,
                            SetGender,
                            SetUserName,
                            SetOldPassword,
                            SetDarkMood
                        }
                    }
                >
                    {children}

                </UseChangeState.Provider>
            </UseState.Provider>
        </UseGlobalRef.Provider>

    )
}