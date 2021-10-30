import {useContext , createContext , useReducer} from "react";
import {initState , Reducer} from "../StateLogin/StateLogin";


const UseState = createContext('')
const UseDispatch = createContext('')


//Consumer Component
export function StateValue ()
{
    return useContext(UseState)
}

export function DispatchValue ()
{
    return useContext(UseDispatch)
}


//Provider Component
export default function AuthProvider({children})
{
    const [State , Dispatch] = useReducer(Reducer , initState)

    return (
        <UseState.Provider value={State}>
            <UseDispatch.Provider value={Dispatch}>
                {children}
            </UseDispatch.Provider>
        </UseState.Provider>
    )
}