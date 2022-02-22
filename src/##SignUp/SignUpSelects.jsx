
import {Days, Months, Years} from "../SiginPage/SettingsForSignIn/BulidOptionsForBirthdayInputs";

export default function SignUpSelects ({GetSignUpInfo , WrongValidate , CheckOnBlur , GetOnBlurBoolean})
{
    return(
        <div className='BrithdayInfo'>
            <div className='Birthday'>
                <p>Birthday</p>
            </div>

            <div className='Options'>

                <select name={'Days'} onChange={GetSignUpInfo}>
                    {
                        Days().map((value , index)=> {
                                return <option key={index} >{value}</option>
                            }
                        )
                    }
                </select>

                <select name={'Months'} onChange={GetSignUpInfo}>
                    {
                        Months.map((value, index) => {
                                return <option key={index}>{value}</option>
                            }
                        )
                    }
                </select>

                <select name='Years'
                        onChange={GetSignUpInfo}
                         onClick={GetOnBlurBoolean}>
                    {
                        Years().map((value, index) => {
                                return <option  key={index}>{value}</option>
                            }
                        )
                    }
                </select>

                {CheckOnBlur.Years && WrongValidate.Years && <span>{WrongValidate.Years}</span>}


            </div>
        </div>
    )
}