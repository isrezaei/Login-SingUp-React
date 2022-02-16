import {Months} from "../../../SettingsForSignIn/BulidOptionsForBirthdayInputs";

export default function MonthOptions ({HandelSignUpData})
{
    return (
        <select name={'Months'} onChange={HandelSignUpData}>
            {
                Months.map((value, index) => {
                        return <option key={index}>{value}</option>
                    }
                )
            }
        </select>
    )
}