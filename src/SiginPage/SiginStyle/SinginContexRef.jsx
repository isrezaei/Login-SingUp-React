// import {useContext, createContext, useState, useEffect , useRef} from "react";
//
//
// const SigninContex = createContext()
//
//
// export function SiginRefContext()
// {
//     return useContext(SigninContex)
// }
//
//
//
// export function ProviderRefSigin({children})
// {
//
//     const InputName = useRef()
//     const InputLastName = useRef()
//     const InputPhoneEmail = useRef()
//     const InputNewPassword = useRef()
//
//
//     const [AllInputRefs , SetAllInputRefs] = useState('')
//     const [AllCurrentRefs , SetAllCurrentRefs] = useState('')
//
//
//     useEffect(()=> {
//
//         SetAllInputRefs({
//             InputName : InputName.current,
//             InputLastName : InputLastName.current,
//             InputPhoneEmail : InputPhoneEmail.current,
//             InputNewPassword : InputNewPassword.current
//         })
//
//
//
//
//
//     } , [])
//
//
//     // const CurrentInputName  =  AllInputRefs.InputName
//     // const CurrentInputLastName = AllInputRefs.InputLastName
//     // const CurrentInputPhoneEmail = AllInputRefs.InputPhoneEmail
//     // const CurrentInputNewPassword = AllInputRefs.InputNewPassword
//     //
//
//
//
//     if (AllInputRefs)
//     {
//         SetAllCurrentRefs({
//             CurrentInputName : AllInputRefs.InputName ,
//             CurrentInputLastName : AllInputRefs.InputLastName ,
//             CurrentInputPhoneEmail : AllInputRefs.InputPhoneEmail ,
//             CurrentInputNewPassword : AllInputRefs.InputNewPassword
//         })
//     }
//
//
//     return (
//         <SigninContex.Provider value={
//             {
//                 InputName ,
//                 InputLastName ,
//                 InputPhoneEmail ,
//                 InputNewPassword ,
//                 CurrentInputName :  AllCurrentRefs.CurrentInputName ,
//                 CurrentInputLastName : AllCurrentRefs.CurrentInputLastName,
//                 CurrentInputPhoneEmail : AllCurrentRefs.CurrentInputPhoneEmail,
//                 CurrentInputNewPassword : AllCurrentRefs.CurrentInputNewPassword
//             }}>
//             {children}
//         </SigninContex.Provider>
//     )
// }