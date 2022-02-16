import {Days} from "../../../SettingsForSignIn/BulidOptionsForBirthdayInputs";


export default function DayOptions ({HandelSignUpData})
{
    return (
        <select name={'Days'} onChange={HandelSignUpData}>
            {
                Days().map((value , index)=> {
                        return <option key={index} >{value}</option>
                    }
                )
            }
        </select>
    )
}