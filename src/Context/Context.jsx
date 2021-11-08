
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


    const [State , Dispatch] = useReducer(Reducer , initState)

    //Sign in Stats
    const [FirstName , SetFirstName] = useState()
    const [LastName , SetLastName] = useState()
    const [PhoneEmail , SetPhoneEmail] = useState()
    const [Password , SetPassword] = useState()
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
                    Password ,
                    Day ,
                    Month ,
                    Year ,
                    Gender,
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
                            SetPassword,
                            SetDay,
                            SetMonth,
                            SetYear,
                            SetGender
                        }
                    }
            >
                {children}
            </UseChangeState.Provider>
        </UseState.Provider>
    )
}