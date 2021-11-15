import {useState , useEffect} from "react";
import {StateValue} from "../../../Context/Context";
import {EmailValid , PasswordValid , PhoneValid} from "../../SingInRegex/SiginRegexInputs";

export default function SiginButton ({SubmitInfo})
{

    const ForbiddenAge = ['2016' , '2017' , '2018' , '2019' , '2020' , '2021' , '2022']

    const [BooleanForButton , SetBooleanForButton] = useState(true)

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        NewPassword ,
        Day ,
        Month ,
        Year ,
        Gender
    } = StateValue()



    const Email = EmailValid.test(PhoneEmail) || PhoneValid.test(PhoneEmail)
    const Password = PasswordValid.test(NewPassword)
    const Years = !ForbiddenAge.includes(Year) && Year !== undefined




    useEffect(()=>{

        FirstName &&
        LastName &&
        Email &&
        Password &&
        Day &&
        Month &&
        Years &&
        Gender ? SetBooleanForButton(false) : SetBooleanForButton(true)

        return SetBooleanForButton(true)


    } , [FirstName , LastName , Email , Password , Day , Month , Years , Gender])



    return  <button disabled={BooleanForButton} className='SiginButton' onClick={SubmitInfo}>Sign in</button>
}