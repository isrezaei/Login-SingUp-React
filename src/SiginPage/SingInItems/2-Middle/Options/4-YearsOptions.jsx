import {Years} from "../../../SettingsForSignIn/BulidOptionsForBirthdayInputs";

export default function YearsOptions ({HandelSignUpData})
{
    return (
        <select name='Years' onChange={HandelSignUpData}>
            {
                Years().map((value, index) => {
                        return <option  key={index}>{value}</option>
                    }
                )
            }
        </select>
    )
}