
import {Days, Months, Years} from "./SignUpBirthdayOptions";
import './Birthday.scss'

export default function SignUpBirthday ({GetSignUpInfo , WrongValidate , CheckOnBlur , GetOnBlurBoolean})
{
    return(
        <div className='BirthdayInfo'>

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

                <select
                    className={(CheckOnBlur.Years && WrongValidate.Years) ? 'RedBorder' : ''}
                    name='Years'
                        onChange={GetSignUpInfo}
                         onClick={GetOnBlurBoolean}>
                    {
                        Years().map((value, index) => {
                                return <option  key={index}>{value}</option>
                            }
                        )
                    }
                </select>
            </div>

            {CheckOnBlur.Years && WrongValidate.Years && <span className='ErrorText'>{WrongValidate.Years}</span>}

        </div>
    )
}