import {useContext, createContext, useReducer, useState} from "react";
import {initState , Reducer} from "../StateLogin/StateLogin";


const UseState = createContext('')
const UseChangeState = createContext('')


//Consumer Component
export function StateValue ()
{
    return useContext(UseState)
}

export function ChangeStateValue ()
{
    return useContext(UseChangeState)
}


//Provider Component
export default function AuthProvider({children})
{
    //Switch State Condition of Login , Log Out , Sign in
    const [State , Dispatch] = useReducer(Reducer , initState)


    //Login State
    const [UserName, SetUserName] = useState('')
    const [OldPassword, SetOldPassword] = useState('')


    //Sign in Stats
    const [FirstName , SetFirstName] = useState()
    const [LastName , SetLastName] = useState()
    const [PhoneEmail , SetPhoneEmail] = useState()
    const [NewPassword , SetNewPassword] = useState()
    const [Day , SetDay] = useState('1')
    const [Month , SetMonth] = useState('January')
    const [Year , SetYear] = useState('2022')
    const [Gender , SetGender] = useState()

    return (
        <UseState.Provider
            value={
                {
                    State ,
                    FirstName ,
                    LastName ,
                    PhoneEmail,
                    NewPassword ,
                    Day ,
                    Month ,
                    Year ,
                    Gender,
                    UserName,
                    OldPassword
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
                            SetOldPassword
                        }
                    }
            >
                {children}
            </UseChangeState.Provider>
        </UseState.Provider>
    )
}